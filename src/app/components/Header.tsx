import React from 'react';
//import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Header = () => {
    return (
        <header className="bg-gray-100 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <button className="mr-4 p-2 bg-gray-200 hover:bg-gray-300">
                        <MenuIcon />
                    </button>
                    <div className="text-xl font-bold text-gray-700 hover:text-gray-900">wanted</div>
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li><a href="/wdlist" className="text-gray-600 hover:text-gray-900">채용</a></li>
                    <li><a href="/events" className="text-gray-600 hover:text-gray-900">이벤트</a></li>
                    <li><a href="/cv/list" className="text-gray-600 hover:text-gray-900">이력서</a></li>
                    <li><a href="/community" className="text-gray-600 hover:text-gray-900">소셜</a></li>
                    <li><a href="https://www.wanted.co.kr/gigs/experts" className="text-gray-600 hover:text-gray-900">프리랜서</a></li>
                    <li><a href="/aiscore/resume" className="text-gray-600 hover:text-gray-900">AI 합격예측</a></li>
                </ul>
                <aside className="flex items-center space-x-4">
                    <button className="p-2 bg-gray-200 hover:bg-gray-300">
                        <SearchIcon />
                    </button>
                    <div className="relative">
                        <button className="p-2 bg-gray-200 hover:bg-gray-300">
                            <MoreHorizIcon />
                        </button>
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                    </div>
                    <div className="relative">
                        <button className="p-2 bg-gray-200 hover:bg-gray-300">👤</button>
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
                    </div>
                </aside>
            </div>
        </header>
    );
}

export default Header;
