import '@/styles/global.css';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^[^@]+@[^@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasError = false;

    if (!formData.username) {
      alert('아이디를 입력하세요.');
      usernameRef.current?.focus();
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      alert('올바른 이메일 형식을 입력하세요.');
      emailRef.current?.focus();
      hasError = true;
    } else if (!validatePassword(formData.password)) {
      alert('패스워드 형식이 잘못되었습니다.');
      passwordRef.current?.focus();
      hasError = true;
    }

    if (hasError) {
      console.log('회원가입 실패');
      setIsModalVisible(true);
    } else {
      console.log('회원가입 데이터:', formData);
      const router = useRouter();
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
          회원가입
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">아이디:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              ref={usernameRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">이메일:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              ref={emailRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">비밀번호:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              ref={passwordRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
