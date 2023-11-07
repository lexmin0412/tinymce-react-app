import { useRequest } from 'ahooks'
import { Button, message } from 'antd'
import { Link } from 'react-router-dom'
import TinyMCEDemo from '../tinymce-demo';

function Home() {
	const {
		loading: fetchLoading,
		runAsync: handleFakeFetch
	} = useRequest(
    () => {
      return fetch(window.location.href).then((res) => {
        return res.text();
      });
    },
    {
			manual: true,
      onSuccess: (res) => {
        console.log("请求结果", res);
				message.success('请求成功')
      },
    }
  );

  return (
    <div className='p-5'>
			<div className='text-3xl font-bold mb-4'>TinyMCE 示例</div>
      <TinyMCEDemo />
    </div>
  );
}

export default Home;
