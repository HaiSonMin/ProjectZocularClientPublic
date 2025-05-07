import './style.scss';
import React, { Fragment, useRef, useState } from 'react';
import { Editor } from '@tiptap/react';
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from 'react-icons/lu';
import { LiaListOlSolid } from 'react-icons/lia';
import { FiItalic } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { GoBold } from 'react-icons/go';
import { RiParagraph, RiSeparator } from 'react-icons/ri';
import { IoIosList } from 'react-icons/io';
import {
  MdOutlineFormatAlignCenter,
  MdOutlineFormatAlignLeft,
  MdOutlineFormatAlignRight,
  MdOutlineFormatAlignJustify,
} from 'react-icons/md';
import { MenuItem } from '../menu-item/MenuItem';
import { GrBlockQuote, GrStrikeThrough } from 'react-icons/gr';
import { CgUndo, CgRedo } from 'react-icons/cg';
import { BsCardImage } from 'react-icons/bs';
import { FaLink, FaLinkSlash } from 'react-icons/fa6';
import styled from 'styled-components';
import { ListImages } from '@/components/photo/list-images/ListImages';
import { IImage } from '@/interfaces/models';
import { findAll as findAllPhotos } from '@/apis/web/image.apis';

const ModalUrlStyled = styled.div<{ $isDisplay: boolean }>`
  position: absolute;
  display: flex;
  opacity: ${(props) => (props.$isDisplay ? 1 : 0)};
  z-index: 9999999;
  background-color: white;
  right: 1rem;
  top: 3rem;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  gap: 1rem;
  pointer-events: ${(props) => (!props.$isDisplay ? 'none' : 'all')};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: max-content;

  &:hover {
    color: black;
  }

  input {
    z-index: 9999;
    padding: 2px 5px;
    border: 1px solid var(--color-grey);
    border-radius: 5px;
  }

  div {
    flex-shrink: 0;
    width: fit-content;
  }
  @media screen and (max-width: 1702px) {
    left: 0;
  }

  @media screen and (max-width: 1300px) {
    left: auto;
  }
  @media screen and (max-width: 1297px) {
    left: 0;
  }
`;

const IconLink = styled.div`
  position: relative;
  div {
    color: black;

    :nth-child(2) {
      border: 1px solid var(--color-grey);
      padding: 5px;
      border-radius: 5px;
    }
    :nth-child(3) {
      border: 1px solid var(--color-grey);
      padding: 5px;
      border-radius: 5px;
    }
  }
`;

interface IItem {
  icon?: React.ReactNode;
  title?: string;
  action?: any;
  isActive?: () => boolean;
  type?: string;
}

interface IProps {
  editor: Editor;
  imagesData: Awaited<ReturnType<typeof findAllPhotos>>;
}

export const MenuBar = ({ editor, imagesData }: IProps) => {
  const refIconUrlLink = useRef<HTMLDivElement>(null);
  const refModalLink = useRef<HTMLDivElement>(null);
  const [isAddLink, setIsAddLink] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [imagesItem, setImagesItem] = useState<any>(imagesData?.metadata?.items);
  const handlerAddLink = () => {
    editor.chain().focus().setColor('red').run();
    setIsAddLink(!isAddLink);
    if (isAddLink) {
      editor.commands.unsetColor();
    }
  };

  const handlerAddImage = () => {
    setImagesItem(imagesData?.metadata?.items || []);
    setIsOpenModal(true);
  };

  const onClickChoseImage = (image: IImage) => {
    if (image) {
      editor.commands.setImage({
        src: image.image_url,
        alt: image.image_alt,
        title: image.image_alt,
      });
      setIsOpenModal(false);
    }
  };

  const addLink = (url: string) => {
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();

      setIsAddLink(false);

      editor.commands.unsetColor();
    }
  };

  const unAddLink = () => {
    setIsAddLink(false);
    editor.commands.unsetColor();
  };

  const items: IItem[] = [
    {
      icon: <GoBold size={8} />,
      title: 'Tô đậm',
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
    },
    {
      icon: <FiItalic size={8} />,
      title: 'Chữ nghiên',
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive('italic'),
    },
    {
      type: 'divider',
    },
    {
      icon: <GrStrikeThrough size={8} />,
      title: 'Gạch Remove',
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive('strike'),
    },
    {
      icon: <FaCode size={8} />,
      title: 'Code',
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive('code'),
    },
    {
      type: 'divider',
    },
    {
      icon: <LuHeading1 size={8} />,
      title: 'Tiêu đề 1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive('heading', { level: 1 }),
    },
    {
      icon: <LuHeading2 size={8} />,
      title: 'Tiêu đề 2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive('heading', { level: 2 }),
    },
    {
      icon: <LuHeading3 size={8} />,
      title: 'Tiêu đề 3',
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive('heading', { level: 3 }),
    },
    {
      icon: <LuHeading4 size={8} />,
      title: 'Tiêu đề 4',
      action: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: () => editor.isActive('heading', { level: 4 }),
    },
    {
      icon: <LuHeading5 size={8} />,
      title: 'Tiêu đề 5',
      action: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
      isActive: () => editor.isActive('heading', { level: 5 }),
    },
    {
      icon: <LuHeading6 size={8} />,
      title: 'Tiêu đề 6',
      action: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
      isActive: () => editor.isActive('heading', { level: 6 }),
    },
    {
      icon: <RiParagraph size={8} />,
      title: 'Đoạn văn',
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive('paragraph'),
    },
    {
      icon: <MdOutlineFormatAlignLeft size={8} />,
      title: 'Căn trái',
      action: () => editor.chain().focus().setTextAlign('left').run(),
      isActive: () => editor.isActive({ textAlign: 'left' }),
    },
    {
      icon: <MdOutlineFormatAlignCenter size={8} />,
      title: 'Căn giữa',
      action: () => editor.chain().focus().setTextAlign('center').run(),
      isActive: () => editor.isActive({ textAlign: 'center' }),
    },
    {
      icon: <MdOutlineFormatAlignRight size={8} />,
      title: 'Căn phải',
      action: () => editor.chain().focus().setTextAlign('right').run(),
      isActive: () => editor.isActive({ textAlign: 'right' }),
    },
    {
      icon: <MdOutlineFormatAlignJustify size={8} />,
      title: 'Căn đều',
      action: () => editor.chain().focus().setTextAlign('justify').run(),
      isActive: () => editor.isActive({ textAlign: 'justify' }),
    },
    {
      icon: <IoIosList size={8} />,
      title: 'Danh sách không thứ tự',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive('bulletList'),
    },
    {
      icon: <LiaListOlSolid size={8} />,
      title: 'Danh sách có thứ tự',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive('orderedList'),
    },
    {
      type: 'divider',
    },
    {
      icon: <GrBlockQuote size={8} />,
      title: 'Trích dẫn',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive('blockquote'),
    },
    {
      icon: <BsCardImage />,
      title: 'Hình ảnh',
      action: () => handlerAddImage(),
    },
    {
      icon: <RiSeparator size={8} />,
      title: 'Nằm ngang',
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      type: 'divider',
    },
    {
      icon: <CgUndo size={8} />,
      title: 'Hoàn tác',
      action: () => editor.chain().focus().undo().run(),
    },
    {
      icon: <CgRedo size={8} />,
      title: 'Làm lại',
      action: () => editor.chain().focus().redo().run(),
    },
    {
      type: 'divider',
    },
    {
      icon: (
        <IconLink ref={refIconUrlLink}>
          <FaLink />
          <ModalUrlStyled
            ref={refModalLink}
            $isDisplay={isAddLink}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              style={{ border: '1px solid black' }}
              type='text'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <div onClick={() => addLink(url)}>Thêm URL</div>
            <div onClick={unAddLink}>Hủy</div>
          </ModalUrlStyled>
        </IconLink>
      ),
      title: 'Liên kết',
      action: () => {
        handlerAddLink();
      },
    },
    {
      icon: <FaLinkSlash size={8} />,
      title: 'Hủy liên kết',
      action: () => editor.chain().focus().extendMarkRange('link').unsetLink().run(),
    },
    {
      type: 'divider',
    },
  ];

  return (
    <div className='editor__header'>
      {items.map((item, index) => (
        <Fragment key={index}>
          {item.type === 'divider' ? (
            <div className='divider' />
          ) : (
            <MenuItem
              action={item.action}
              isActive={item.isActive}
              icon={item.icon}
              title={item.title}
            />
          )}
        </Fragment>
      ))}
      <input
        title='Chọn màu'
        className='input-color'
        type='color'
        onInput={(event: any) => {
          editor.chain().focus().setColor(event.target.value).run();
        }}
        value={editor.getAttributes('textStyle').color}
        data-testid='setColor'
      />
      {isOpenModal && (
        <ListImages
          isOpenModal={isOpenModal}
          onCloseModal={(b) => setIsOpenModal(b)}
          onSelectedImage={(image) => onClickChoseImage(image)}
          images={imagesItem || []}
        />
      )}
    </div>
  );
};
