import { Select } from 'antd';
import React from 'react';
import './index.scss'
const { Option } = Select;
type Props = { option: Array<string>, setType: Function }
export default function Index({ option, setType }: Props) {

    const handleChange = (v: number) => {
        // console.log(v, 'select');
        setType(v.toString())
    }

    return (
        <Select
            defaultValue={1}
            style={{ color: 'rgba(0,0,0,.3)', width: '90%', marginTop: '14px', marginLeft: '50%', transform: 'translateX(-50%)', }}
            dropdownStyle={{
                height: '15vh',
            }}
            onChange={(v) => handleChange(v)}
        >{option.map((v, i) => {
            return (<Option key={i + 1} value={i + 1}>&nbsp;{v}</Option>)
        })}
        </Select>
    )
}


