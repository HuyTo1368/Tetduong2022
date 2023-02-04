var Combobox = Combobox || {};

Combobox.getDepartment = function (Parent) {
    let data = [
        { id: "142cb08f-7c31-21fa-8e90-67245e8b283e", name: "Phòng Công nghệ thông tin" },
        { id: "17120d02-6ab5-3e43-18cb-66948daf6128", name: "Phòng Kế Toán" },
        { id: "469b3ece-744a-45d5-957d-e8c757976496", name: "Phòng Hành Chính" },
        { id: "4e272fc4-7875-78d6-7d32-6a1673ffca7c", name: "Phòng Nhân Sự" },
    ],
        placeholder = "Tên đơn vị",
        FieldName = "Department",
        NameId = "DepartmentId";

    return {
        data,
        placeholder,
        FieldName,
        NameId,
        Parent,
    }
}

export default Combobox;