const columns = [
  {
    name: "id",
    label: "ID",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "title",
    label: "PRODUCT TITLE",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "image",
    label: "IMAGE",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "description",
    label: "PRODUCT DETAILS",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "created_at",
    label: "CREATED AT",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "status",
    label: "STATUS",
    options: {
      filter: true,
      sort: false,
    },
  },
];

export default columns;
