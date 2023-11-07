import {useRef} from "react";
import {Editor} from "@tinymce/tinymce-react";
import { Button } from 'antd'

export default function TinyMCEDemo() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
      console.log(editorRef.current.getContent());
    }
  };

  const handleChange = (e: unknown) => {
    console.log("handleChange", e);
  };

  return (
    <>
      <Editor
        tinymceScriptSrc={
          "https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/js/libs/tinymce/tinymce.min.js"
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        onChange={handleChange}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div className="flex items-center mt-5">
        <Button type="primary" onClick={log}>
          打印 Editor 内容
        </Button>
				<div className="ml-4">
					请打开控制台查看输出。
				</div>
      </div>
    </>
  );
}
