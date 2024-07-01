import React, { Fragment, useState, useEffect } from "react";
import { Container } from "reactstrap";
import DataTable from "react-data-table-component";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
    getUser,
} from "../../redux/GetUserData/actions";
import { successPopup, errorPopup } from "../../Services/toasterMessage";
import customStyles from "../../assets/commanComponents/tableStyle";

function Index() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [countPerpage, setCountPerPage] = useState(50);
  const [totalRows, setTotalRows] = useState(0);
  const dispatch = useDispatch();
  const {
    users,
    loading,
    error,
  } = useSelector((state) => {
    return {
      users: state.UserReducer?.users,
      loading: state?.UserReducer?.loading,
      error: state?.UserReducer?.error,
    };
  });
  
  ///for get all users 
  useEffect(() => {
    // Dispatch Users action and handle success/error
    const fetchData = async () => {
      try {
        await dispatch(getUser({ search, countPerpage, currentPage }));
      } catch (error) {
        errorPopup("Failed to retrieve Users list. Please try again later.");
      }
    };
    fetchData();
  }, [dispatch, search, countPerpage, currentPage]);

  //for colum of data table
  const columns = [
    {
      name: "ID",
      selector: (row) => row?.id,
    //   sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row?.name,
    //   sortable: true,
    },
    {
        name: "Email ID",
        selector: (row) => row?.email,
        // sortable: true,
    },
    {
        name: "Mobile No.",
        selector: (row) => row?.phoneNumber,
        // sortable: true,
    },
    // {
    //   name: "Action",
    //   sortable: true,
    //   cell: (row) => (
    //     <div className="d-flex gap-3 text-center">
    //       <EditOutlined onClick={() => handleEditClick(row)} title="Edit" />
    //       <DeleteOutlined
    //         onClick={() => handleDeleteClick(row)}
    //         title="Delete"
    //       />
    //     </div>
    //   ),
    // },
  ];

  //for pagaintion page chnages
  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
  };


  return (
    <Fragment>
      <Container fluid={true} className="mt-4">
        <h4 className="p-2">All Users List</h4>
        <DataTable
         customStyles={customStyles}
          columns={columns}
          data={users}
          progressPending={loading}
          paginationServer={true}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={(currentRowsPerPage) => {
            setCountPerPage(currentRowsPerPage);
          }}
          pagination
          paginationPerPage={countPerpage}
          paginationTotalRows={totalRows}
          paginationRowsPerPageOptions={[50, 100, 150, 200]}
          paginationComponentOptions={{
            rowsPerPageText: "Records per page:",
            rangeSeparatorText: "out of",
          }}
          fixedHeader
          fixedHeaderScrollHeight="350px"
          highlightOnHover
          subHeader
        //   subHeaderComponent={
        //     <div className="d-flex gap-5">
        //       <input
        //         type="text"
        //         placeholder="Search here"
        //         className="form-control"
        //         style={{ height: "35px" }}
        //         value={search}
        //         onChange={(e) => setSearch(e.target.value)}
        //       />
        //     </div>
        //   }
        />
      </Container>
    </Fragment>
  );
}
export default Index;
