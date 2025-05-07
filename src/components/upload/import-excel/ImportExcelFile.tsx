"use client";
import { IBaseResponse } from "@/interfaces/common/IResponse.interface";
import { ListItemIcon, ListItemText } from "@mui/material";
import { Spin } from "antd";
import { ChangeEventHandler, useTransition } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { CiImport } from "react-icons/ci";

interface IPropImportExcelFile {
    apiAddItemByFile?: (params: { files: FileList }) => Promise<IBaseResponse<any>>;
}
export const ImportExcelFile = ({ apiAddItemByFile }: IPropImportExcelFile) => {
    const [isPending, startTransition] = useTransition();
    const handleChangeInputFile: ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const files = event.target.files;

        // Call api
        startTransition(async () => {
            //
            if (!files || !apiAddItemByFile) return;
            const maxUploadSize: number = 10;

            //
            for (const file of files) {
                const { size } = file;

                if((size / 1024 / 1024) > maxUploadSize) {
                    toast.error(`File size must not exceed ${maxUploadSize}mb`);
                    break;
                }
            }

            const res = await apiAddItemByFile({ files: files });

            if (res?.statusCode !== 200) {
                toast.error(res.message);
                return;
            }
            toast.success(res.message);
        });
    };

    return (
        <label htmlFor="input-file">
            {!isPending ? (
                <>
                    <ListItemIcon>
                        <CiImport size={20} color="green" />
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            ".MuiTypography-root": {
                                fontSize: "16px",
                            },
                        }}
                    >
                        Import
                        <input
                            hidden
                            id="input-file"
                            accept=".xlsx, .xls"
                            type="file"
                            multiple
                            onChange={handleChangeInputFile}
                        />
                    </ListItemText>
                </>
            ) : (
                <Spin indicator={<AiOutlineLoading />} size="small" />
            )}
        </label>
    );
};
