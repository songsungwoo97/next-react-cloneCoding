import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { SearchModalBox, SearchModalContent } from '../components/modalStyle';
import { toast } from 'react-toastify';
import router from 'next/router';

const Modal = (props) => {
  const { closeModal } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const handleChange = (e) => setSearch(e.target.value);
  const typeChange = (e: SelectChangeEvent) => setType(e.target.value);
  const clickSearch = async () => {};

  return (
    <SearchModalBox onClick={closeModal}>
      <SearchModalContent onClick={(e) => e.stopPropagation()}>
        <FormControl size="small">
          <InputLabel id="demo-select-small">검색</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={type}
            label="type"
            onChange={typeChange}
          >
            <MenuItem value={'title'}>제목</MenuItem>
            <MenuItem value={'content'}>내용</MenuItem>
            <MenuItem value={'titleAndContent'}>제목+내용</MenuItem>
            <MenuItem value={'writer'}>작성자</MenuItem>
          </Select>
        </FormControl>
        <input type="text" placeholder="검색" onChange={handleChange} />
        <div>
          <button onClick={closeModal}>뒤로가기</button>
          <button onClick={clickSearch}>검색</button>
        </div>
      </SearchModalContent>
    </SearchModalBox>
  );
};

export default Modal;
