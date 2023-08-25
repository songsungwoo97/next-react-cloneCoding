import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ApartmentIcon from '@mui/icons-material/Apartment';
//import Image from 'next/image';

const Main: React.FC = () => {
    return (
        <main className="">
            {
                <section className="">
                    {/* slider */}
                    <div className="relative">
                        <div>
                            <div className="block px-8">
                                <div className="flex justify-center rounded-2xl m-6">
                                    <a>
                                        {/* <Image alt="ddd" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2135%2Fad33d1a2.jpg" width="100" height="150"></Image> */}
                                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2081%2F7c4e8e6d.jpg&w=1060&q=100"></img>
                                    </a>
                                </div>
                                <div className="text-center m-6">
                                    <h2>누적 150억 투자받은 XYZ</h2>
                                    <h3>로봇으로 바꾸는 일상, 함께 만들어요</h3>
                                    <a href="" >
                                        <span>
                                            바로가기
                                            <KeyboardArrowRightIcon />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {/*  */}
                    <aside className="mt-16">
                        <div className="flex justify-center mt-32 m-12 h-16">
                            <a className='bg-blue-500 text-white rounded-full w-full text-center p-3'>
                                <SearchIcon />
                                <span>채용 중인 포지션 보러가기</span>
                            </a>
                        </div>
                    </aside>
                    <article className="mt-16">
                        <div className="flex mx-12 h-40 justify-center ">
                            <div className="inline-block align-middle w-full">
                                <div className="flex rounded-2xl justify-between bg-slate-400 p-9">
                                    <ul>
                                    <li>내가 관심있을 만한 포지션</li>
                                    <li>회원가입 후, 이력서와 포지션 분석을 통해 적절한 포지션을 추천받으세요!</li>
                                    </ul>
                                    <button className="rounded-full text-white bg-blue-500 h-14 text-center">지금 시작하기</button>
                                </div>
                            </div>
                        </div>
                    </article >
                    <article className="mt-16">
                        <div className="flex mx-12 h-32 justify-center">
                            <div className="inline-block align-middle w-full">
                                <div className="flex rounded-2xl justify-between bg-slate-400 p-9">
                                    <div className="text-white ">내 연차에 이 연봉이 괜찮은가? 궁금할 땐</div>
                                    <button className="bg-white rounded-full p-2 text-blue-500 h-14">커리어 중간점검</button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <nav className="mt-16 flex justify-center">
                        <div className="flex justify-between">
                            <a href="">
                                <PersonOutlineIcon />
                                <span>내 프로필</span>
                            </a>
                            <a href="">
                                <ApartmentIcon />
                                <span>매치업</span>
                            </a>
                        </div>
                    </nav>
                </section>
            }
        </main>
    );
};

export default Main;