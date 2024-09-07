import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
    {
        label: <input type='text' placeholder='url' />,
        key: '0',
    },
    {
        label: <input type='text' placeholder='title' />,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: <input type='text' placeholder='24 Oylik summa' />,
        key: '3',
    },
    {
        label: <input type='text' placeholder='12 Oylik summa' />,
        key: '4',
    },
    {
        label: <input type='text' placeholder='Summa' />,
        key: '5',
    },
];
const App = () => (
    <Dropdown
        menu={{
            items,
        }}
        trigger={['click']}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                Click me
                <DownOutlined />
            </Space>
        </a>
    </Dropdown>
);
export default App;