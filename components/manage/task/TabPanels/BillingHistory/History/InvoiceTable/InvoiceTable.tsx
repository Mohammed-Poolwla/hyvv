import React from "react";

import {
  ButtonGroup,
  IconButton,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { BsDownload, BsEye } from "react-icons/bs";

const table = [
  {
    invoice: "INV #DL09J72G23N",
    date: "May 15, 23",
    frequency: "Weekly",
    amount: "$ 320",
    status: (
      <Tag borderRadius="full" colorScheme="green">
        Paid
      </Tag>
    ),
    action: (
      <ButtonGroup>
        <IconButton aria-label="View" variant="link" icon={<BsEye />} />
        <IconButton
          aria-label="Download"
          variant="link"
          icon={<BsDownload />}
        />
      </ButtonGroup>
    ),
  },
  {
    invoice: "INV #DL09J72G23N",
    date: "May 15, 23",
    frequency: "Weekly",
    amount: "$ 320",
    status: (
      <Tag borderRadius="full" colorScheme="green">
        Paid
      </Tag>
    ),
    action: (
      <ButtonGroup>
        <IconButton aria-label="View" variant="link" icon={<BsEye />} />
        <IconButton
          aria-label="Download"
          variant="link"
          icon={<BsDownload />}
        />
      </ButtonGroup>
    ),
  },
  {
    invoice: "INV #DL09J72G23N",
    date: "May 15, 23",
    frequency: "Weekly",
    amount: "$ 320",
    status: (
      <Tag borderRadius="full" colorScheme="green">
        Paid
      </Tag>
    ),
    action: (
      <ButtonGroup>
        <IconButton aria-label="View" variant="link" icon={<BsEye />} />
        <IconButton
          aria-label="Download"
          variant="link"
          icon={<BsDownload />}
        />
      </ButtonGroup>
    ),
  },
  {
    invoice: "INV #DL09J72G23N",
    date: "May 15, 23",
    frequency: "Weekly",
    amount: "$ 320",
    status: (
      <Tag borderRadius="full" colorScheme="green">
        Paid
      </Tag>
    ),
    action: (
      <ButtonGroup>
        <IconButton aria-label="View" variant="link" icon={<BsEye />} />
        <IconButton
          aria-label="Download"
          variant="link"
          icon={<BsDownload />}
        />
      </ButtonGroup>
    ),
  },
  {
    invoice: "INV #DL09J72G23N",
    date: "May 15, 23",
    frequency: "Weekly",
    amount: "$ 320",
    status: (
      <Tag borderRadius="full" colorScheme="green">
        Paid
      </Tag>
    ),
    action: (
      <ButtonGroup>
        <IconButton aria-label="View" variant="link" icon={<BsEye />} />
        <IconButton
          aria-label="Download"
          variant="link"
          icon={<BsDownload />}
        />
      </ButtonGroup>
    ),
  },
  {
    invoice: "INV #DL09J72G23N",
    date: "May 15, 23",
    frequency: "Weekly",
    amount: "$ 320",
    status: (
      <Tag borderRadius="full" colorScheme="green">
        Paid
      </Tag>
    ),
    action: (
      <ButtonGroup>
        <IconButton aria-label="View" variant="link" icon={<BsEye />} />
        <IconButton
          aria-label="Download"
          variant="link"
          icon={<BsDownload />}
        />
      </ButtonGroup>
    ),
  },
  {
    invoice: "INV #DL09J72G23N",
    date: "May 15, 23",
    frequency: "Weekly",
    amount: "$ 320",
    status: (
      <Tag borderRadius="full" colorScheme="green">
        Paid
      </Tag>
    ),
    action: (
      <ButtonGroup>
        <IconButton aria-label="View" variant="link" icon={<BsEye />} />
        <IconButton
          aria-label="Download"
          variant="link"
          icon={<BsDownload />}
        />
      </ButtonGroup>
    ),
  },
];

export interface IInvoiceTable {}

const InvoiceTable: React.FC<IInvoiceTable> = () => {
  return (
    <TableContainer className="rounded-md border">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Invoice</Th>
            <Th>Date</Th>
            <Th>Frequency</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {table.map((tableItem, index) => (
            <Tr key={index}>
              <Td>{tableItem.invoice}</Td>
              <Td>{tableItem.date}</Td>
              <Td>{tableItem.frequency}</Td>
              <Td>{tableItem.amount}</Td>
              <Td>{tableItem.status}</Td>
              <Td>{tableItem.action}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceTable;
