import React from 'react';
//import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Wanted from "/public/wanted.svg";

const Header: React.FC = () => {
    return (
        <header className="">
            {
                <div className="m-9">
                    <div className="flex justify-between">
                        <div className='flex'>
                            <button><MenuIcon/></button>
                            <Wanted/>
                        </div>
                        <button className="border-solid border-gray-50">회원가입하기</button>
                    </div>
                    <div className="flex justify-between">
                        <ul className="flex ">
                            <li className="p-2">채용</li>
                            <li className="p-2">이벤트</li>
                            <li className="p-2">이력서</li>
                            <li className="p-2">소셜</li>
                            <li className="p-2">프리랜서</li>
                            <li className="p-2">AI 합격예측</li>
                        </ul>
                        <ul className="flex ">
                            <li className="p-2"><SearchIcon/></li>
                            <li className="p-2"><MoreHorizIcon/></li>
                        </ul>
                    </div>
                </div>
            }
        </header>
    );
};

export default Header;
