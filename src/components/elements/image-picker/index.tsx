import { useState } from "react";
import { Upload, Image } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Notify from "utils/notify";

const ImagePickerContainer = styled.div``;

const ImagePicker = ({ onUpload }: any) => {
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState<any>("");
  const [visible, setVisible] = useState<boolean>(false)

  const handlePreview = async (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    setVisible(true);
  };

  const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      Notify("You can only upload JPG/PNG file!", "error");
    }
    const isLt5M = file.size < 5 ? 1024 : 1024;
    if (!isLt5M) {
      Notify("Image must smaller than 5MB!", "error");
    }
    return isJpgOrPng && isLt5M;
  };

  const handleChange = ({ fileList, file }: any) => {
    if (beforeUpload(file)) {
      setFileList(fileList);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const dummyRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <ImagePickerContainer>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        iconRender={() => <LoadingOutlined />}
        onChange={handleChange}
        maxCount={5}
        customRequest={dummyRequest}
        multiple={true}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Image
        width={200}
        style={{ display: 'none' }}
        src={previewImage}
        preview={{
          visible,
          src: previewImage,
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
    </ImagePickerContainer>
  );
};

export default ImagePicker;
