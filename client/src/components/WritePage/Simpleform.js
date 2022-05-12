import React, {useState} from 'react';
import { 
    Form, 
    Input, 
    Button, 
    Upload, 
    Select, 
    DatePicker } from 'antd';

const { Option } = Select;
function Simpleform() {

    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
    ]);
    
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    
    const onPreview = async file => {
        let src = file.url;
        if (!src) {
        src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
        });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    }

    return (
        <div>
            <section>
                <h2>카테고리 이름</h2>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </section>
            <form>
                <Form.Item
                    label='제목'
                >
                <Input />
                </Form.Item>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType='picture-card'
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}

                >
                {fileList.length < 3 && '+ Upload'}
                </Upload>
                <Form.Item
                    label='이름'
                >
                </Form.Item>
                <Input />
                <Form.Item
                    label='종'
                >
                <Input />
                </Form.Item>
                <Form.Item label="성별">
                    <Select>
                        <Option value="male">수컷(남)</Option>
                        <Option value="female">암컷(여)</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label='보호소/실종장소'
                >
                <Input />
                </Form.Item>
                <Form.Item label="안락사 예정일/실종날짜">
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label='연락처'
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="상세설명"
                    rules={[{ required: true, message: 'Please input Intro' }]}
                >
                <Input.TextArea showCount maxLength={150} />
                </Form.Item>
            </form>
        </div>
    )
}


export default Simpleform