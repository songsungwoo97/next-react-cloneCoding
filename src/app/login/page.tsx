import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";

interface LoginForm {
    username: string;
    password: string;
}


const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

    const onSubmit = (data: LoginForm) => {
        if (data.username === 'helloworld' && data.password === 'Qwer!234') {
            console.log('로그인 성공');
            console.log(data.username, data.password);
            const router = useRouter();
            router.push('/');
        } else {
            // 모달로 에러 메시지 표시 (모달 코드 추가 필요)
        }
    };

    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>아이디:</label>
                    <input 
                        {...register("username", { required: "아이디를 입력하세요." })} 
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                </div>
                <div>
                    <label>패스워드:</label>
                    <input 
                        type="password" 
                        {...register("password", { 
                            required: "비밀번호를 입력하세요.",
                            pattern: {
                                value: /^Qwer!234$/,
                                message: "올바른 비밀번호를 입력하세요."
                            }
                        })} 
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default Login;
