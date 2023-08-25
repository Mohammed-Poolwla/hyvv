import {
  Box,
  Button,
  Checkbox,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiEye,
} from "react-icons/fi";
import React from "react";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import moment from "moment";
import { HiOutlineExternalLink } from "react-icons/hi";

export function AppTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    canPreviousPage,
    canNextPage,
    page,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,

    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const [selected, setSelected] = React.useState([]);
  const isSelected = (id) => selected.indexOf(parseInt(id)) !== -1;
  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(parseInt(id));
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, parseInt(id));
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((item) => item.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  return (
    <>
      <TableContainer>
        <Table variant={"simple"} size="md" {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup, i) => (
              <Tr
                key={i}
                {...headerGroup.getHeaderGroupProps()}
                className=" bg-[#efefef]"
              >
                {headerGroup.headers.map((column, i) => (
                  <Th
                    key={i}
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#1E1E1E",
                      px: i == 0 ? 3 : 6,
                    }}
                  >
                    <Flex align={"center"} gap={6}>
                      {i == 0 ? (
                        <Checkbox
                          isChecked={
                            data.length > 0 && selected.length === data.length
                          }
                          isIndeterminate={
                            selected.length &&
                            !(
                              data.length > 0 && selected.length === data.length
                            )
                          }
                          onChange={handleSelectAllClick}
                          colorScheme="main"
                        />
                      ) : (
                        ""
                      )}
                      <Flex
                        align={"center"}
                        gap={4}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        <Box as="span">{column.label}</Box>
                        <Box as="span">
                          {column.canSort ? (
                            column.isSorted ? (
                              column.isSortedDesc ? (
                                <FaSortUp />
                              ) : (
                                <FaSortDown />
                              )
                            ) : (
                              <FaSort />
                            )
                          ) : (
                            ""
                          )}
                        </Box>
                      </Flex>

                      <Box ml={2} as="span"></Box>
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, rowI) => {
              prepareRow(row);
              const isItemSelected = isSelected(row.id);
              return (
                <Tr {...row.getRowProps()} key={rowI}>
                  {row.cells.map((cell, i) => {
                    return (
                      <Td
                        key={i}
                        {...cell.getCellProps()}
                        sx={{
                          px: i == 0 ? 3 : 6,
                          color: "#101828",
                          borderColor: "#e8e8e8",
                          fontWeight: "semibold",
                          py: 3,
                        }}
                      >
                        <Flex align={"center"} gap={6}>
                          {i == 0 ? (
                            <Checkbox
                              isChecked={isItemSelected}
                              onChange={() => {
                                handleClick(row.id);
                              }}
                              colorScheme="main"
                            />
                          ) : (
                            ""
                          )}
                          {cell.render("Cell")}
                        </Flex>
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        {pageCount > 1 && (
          <Flex align={"center"} justify={"center"} gap={2} p={6}>
            <Button
              onClick={() => previousPage()}
              isDisabled={!canPreviousPage}
              colorScheme="main"
              size="sm"
              variant={"outline"}
              leftIcon={<FiChevronLeft />}
            >
              Previous
            </Button>
            {Array.from({ length: 5 }, (_, j) => pageIndex - 2 + j)
              .filter((j) => j > -1 && j < pageOptions.length)
              .map((item, i) => {
                return item == pageIndex ? (
                  <Button
                    key={i}
                    onClick={() => gotoPage(item)}
                    colorScheme="main"
                    size="sm"
                  >
                    {item + 1}
                  </Button>
                ) : (
                  <Button
                    onClick={() => gotoPage(item)}
                    colorScheme="blackAlpha"
                    variant={"ghost"}
                    size="sm"
                  >
                    {item + 1}
                  </Button>
                );
              })}
            <Button
              onClick={() => nextPage()}
              isDisabled={!canNextPage}
              colorScheme="main"
              variant={"outline"}
              size="sm"
              rightIcon={<FiChevronRight />}
            >
              Next
            </Button>
          </Flex>
        )}
      </TableContainer>
    </>
  );
}

const DataTable = ({ data, columns }) => {
  const tableColumns = columns.map((item) => {
    return {
      label: item.label.charAt(0).toUpperCase() + item.label.slice(1),
      accessor: item.label,
      disableSortBy: !item.sortable,
      Cell: ({ row: { original } }) =>
        item.type == "text" ? (
          original[item.label]
        ) : item.type == "invoice" ? (
          <div className="flex items-center gap-x-2">
            <div className="rounded-full bg-[#e7f0f3] p-2 text-[#08657e]">
              <IoDocumentOutline />
            </div>
            {original[item.label]}
          </div>
        ) : item.type == "date" ? (
          moment(original[item.label]).format("MMMM DD, YYYY")
        ) : item.type == "amount" ? (
          "$" + original[item.label]
        ) : item.type == "actions" ? (
          <div className="flex gap-x-3">
            <FiEye className="cursor-pointer" />
            <FiDownload className="cursor-pointer" />
          </div>
        ) : item.type == "name" ? (
          <div className="flex cursor-pointer items-center gap-x-2 text-hyvv-main">
            <p className="underline">{original[item.label]}</p>
            <HiOutlineExternalLink />
          </div>
        ) : (
          original[item.label]
        ),
    };
  });
  const tableData = data.map((item, i) => {
    return {
      ...item,
      id: i,
    };
  });

  return (
    <div className="overflow-hidden rounded-lg border border-[#d2d2d2]">
      <AppTable columns={tableColumns} data={tableData} />
    </div>
  );
};

export default DataTable;
