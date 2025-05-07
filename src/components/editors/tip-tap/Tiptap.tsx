"use client";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useRef } from "react";
import "tiptap-extension-resizable-image/styles.css";
import { MenuBar } from "./menu-bar/MenuBar";
import "./style.scss";

import { findAll as findAllPhotos } from "@/apis/web/image.apis";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import History from "@tiptap/extension-history";
import Link from "@tiptap/extension-link";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import CustomImage from "./customImage/CustomImage";

interface IProps {
    initializeContent?: string;
    imagesData?: Awaited<ReturnType<typeof findAllPhotos>>;
    setContent?: (value: string) => void;
}

export const Tiptap = ({ initializeContent, setContent, imagesData }: IProps) => {
    const refEditor = useRef<any>(null);
    const editor = useEditor({
        content: initializeContent || "",
        extensions: [
            StarterKit.configure({
                history: false,
            }),
            Color.configure({
                types: ["textStyle"],
            }),
            Text,
            History,
            TextStyle,
            Highlight,
            Paragraph,
            CodeBlock,
            Image,
            // ResizableImage.configure({}),
            Link.configure({
                HTMLAttributes: {
                    rel: "noopener noreferrer",
                    target: "_blank",
                },
            }),
            CustomImage,
            Typography,
            TaskList,
            TaskItem,
            Document,
            Dropcursor,
            Blockquote,
            TextAlign.configure({
                types: ["heading", "paragraph", "img", "div"],
            }),
        ],

        onUpdate({ editor }: { editor: any }) {
            if (setContent) setContent(editor.getHTML());
        },
    });

    useEffect(() => {
        if (editor) {
            editor.commands.setContent(initializeContent || "");
        }
    }, [initializeContent, editor]);





    if (!editor) {
        return null;
    }
    return (
        <div className="editor">
            {editor && <MenuBar imagesData={imagesData as any} editor={editor} />}
            <EditorContent
                ref={refEditor}
                className="editor__content"
                editor={editor}
            />
        </div>
    );
};
