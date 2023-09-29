import { Box, Card } from "@mui/material";
import MoreOptions from "components/MoreOptions";
import { H5 } from "components/Typography";
import TodoItem from "page-sections/team-member/TodoItem";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const TodoList = () => {
  const {
    t
  } = useTranslation();
  const [todoEl, setTodoEl] = useState(null);

  const handleTodoMoreOpen = event => {
    setTodoEl(event.currentTarget);
  };

  const handleTodoMoreClose = () => setTodoEl(null);

  return <Card sx={{
    padding: 2
  }}>
      <H5 mb={2}>{t("Todo List")}</H5>
      {todoList.map(item => <Box mt={3} key={item.id}>
          <TodoItem item={item} handleTodoMore={handleTodoMoreOpen} />
        </Box>)}

      <MoreOptions anchorEl={todoEl} handleMoreClose={handleTodoMoreClose} />
    </Card>;
};

const todoList = [{
  id: 1,
  title: "Create Minimal Logo",
  date: "Due In 2 Days",
  status: "Pending"
}, {
  id: 2,
  title: "Stock Market Exchange",
  date: "Due In 3 Days",
  status: "Processing"
}, {
  id: 3,
  title: "Shopping & Groccery",
  date: "Due In 5 days",
  status: "Pending"
}, {
  id: 4,
  title: "Football Match",
  date: "Due In 1 Day",
  status: "Completed"
}, {
  id: 5,
  title: "Create Landing Page",
  date: "Due In 4 Days",
  status: "Pending"
}, {
  id: 6,
  title: "Marketing Service",
  date: "Due In 3 Days",
  status: "Completed"
}, {
  id: 7,
  title: "Product Analysis",
  date: "Due In 3 Days",
  status: "Processing"
}, {
  id: 8,
  title: "UI/UX Design",
  date: "Due In 3 Days",
  status: "Completed"
}];
export default TodoList;