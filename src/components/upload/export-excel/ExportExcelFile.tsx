import { ListItemIcon, ListItemText } from "@mui/material";
import toast from "react-hot-toast";
import { CiExport } from "react-icons/ci";
import * as XLSX from "xlsx";

interface IPropExportExcel {
    dataExport: Array<any>;
    message?: string;
}

export const ExportExcelFile = ({
    dataExport,
    message = "You have not selected any items yet",
}: IPropExportExcel) => {
    const handleExportCustomer = () => {
        if (dataExport.length === 0) {
            toast.error(message);
            return;
        }

        const clearData = dataExport.map((item) => {
            const { id, version, ...rest } = item;
            return rest;
        });

        // Chuyển đổi data object thành một worksheet
        const worksheet = XLSX.utils.json_to_sheet(clearData);

        // Tạo một workbook và thêm worksheet vào nó
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        // Xuất file Excel
        XLSX.writeFile(workbook, "data.xlsx");
    };

    return (
        <span onClick={handleExportCustomer} className="flex items-center">
            <ListItemIcon>
                <CiExport size={20} color="blue" />
            </ListItemIcon>
            <ListItemText
                sx={{ fontSize: "24px", marginBottom: "-12px", color: "blue" }}
            >
                Export
            </ListItemText>
        </span>
    );
};
