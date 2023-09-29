import { Add, MoreHoriz } from "@mui/icons-material";
import { AvatarGroup, Box, Button, Card, Grid, IconButton, LinearProgress } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H3, H5, H6, Paragraph, Small } from "components/Typography";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useTranslation } from "react-i18next";
import AddTodoForm from "./AddTodoForm";
import { DroppableWrapper } from "./StyledComponent";
const todoList = [{
  id: "01",
  title: "Create Minimal Logo",
  date: "9/17/2021",
  description: "Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",
  author: {
    name: "Tom Cruise",
    image: "/static/avatar/001-man.svg"
  },
  statusColor: "primary.main"
}, {
  id: "02",
  title: "Therapy Session",
  date: "9/17/2021",
  description: "Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",
  author: {
    name: "Tom Cruise",
    image: "/static/avatar/002-girl.svg"
  },
  statusColor: "primary.red"
}, {
  id: "03",
  title: "Create Minimal Logo",
  date: "9/17/2021",
  description: "Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",
  author: {
    name: "Tom Cruise",
    image: "/static/avatar/005-man-1.svg"
  },
  statusColor: "primary.main"
}, {
  id: "04",
  title: "Website UI Design",
  date: "9/17/2021",
  description: "Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",
  author: {
    name: "Tom Cruise",
    image: "/static/avatar/011-man-2.svg"
  },
  statusColor: "primary.yellow"
}];
const viewColumns = {
  todo: {
    name: "To do",
    todos: todoList.slice(0, 2)
  },
  progress: {
    name: "In Progress",
    todos: [todoList[2]]
  },
  done: {
    name: "Done",
    todos: [todoList[3]]
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const {
    source,
    destination
  } = result;

  if (source.droppableId === destination.droppableId && source.index === destination.index) {
    return;
  }

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.todos];
    const destItems = [...destColumn.todos];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({ ...columns,
      [source.droppableId]: { ...sourceColumn,
        todos: sourceItems
      },
      [destination.droppableId]: { ...destColumn,
        todos: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.todos];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({ ...columns,
      [source.droppableId]: { ...column,
        todos: copiedItems
      }
    });
  }
};

const Todo = () => {
  const [columns, setColumns] = useState(viewColumns);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const {
    t
  } = useTranslation();
  return <Grid container spacing={3}>
      <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([columnId, column], index) => {
        return <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card sx={{
            height: "100%",
            maxHeight: 700
          }}>
                {columnId === "todo" ? <Box padding="1rem">
                    <H5>{t(column.name)}</H5>
                    <Button fullWidth variant="contained" onClick={() => setShowAddTodoForm(true)} sx={{
                marginY: "1rem",
                display: showAddTodoForm ? "none" : "auto"
              }}>
                      <Add />
                    </Button>
                    <AddTodoForm showAddTodoForm={showAddTodoForm} setShowAddTodoForm={setShowAddTodoForm} />
                  </Box> : <H5 padding="1rem">{t(column.name)}</H5>}

                <Droppable droppableId={columnId}>
                  {provided => {
                return <DroppableWrapper {...provided.droppableProps} ref={provided.innerRef}>
                        {column.todos.map((todo, index) => {
                    return <Draggable draggableId={todo.id} index={index} key={todo.id}>
                              {provided => {
                        return <Card key={todo.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{ ...provided.draggableProps.style
                        }} sx={{
                          padding: "1rem",
                          marginBottom: "1.5rem"
                        }}>
                                    <FlexBetween>
                                      <Small>July 2, 2020</Small>
                                      <IconButton sx={{
                              padding: 0
                            }} // onClick={handleMoreClick}
                            >
                                        <MoreHoriz />
                                      </IconButton>
                                    </FlexBetween>

                                    <Box sx={{
                            textAlign: "center",
                            pt: 6,
                            pb: 4
                          }}>
                                      <H3>Web Designing</H3>
                                      <H6 color="text.secondary" fontWeight={500} mt={0.5}>
                                        Prototyping
                                      </H6>
                                    </Box>

                                    <FlexBetween py={1}>
                                      <Paragraph fontWeight={600}>
                                        Project Progress
                                      </Paragraph>
                                      <Paragraph fontWeight={600}>
                                        32%
                                      </Paragraph>
                                    </FlexBetween>

                                    <LinearProgress value={32} variant="determinate" sx={{
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: todo.statusColor
                            }
                          }} />

                                    <FlexBetween pt="1.5rem">
                                      <FlexBox alignItems="center" gap={1}>
                                        <AvatarGroup>
                                          <AppAvatar alt="Remy Sharp" src="/static/avatar/001-man.svg" />
                                          <AppAvatar alt="Travis Howard" src="/static/avatar/002-girl.svg" />
                                        </AvatarGroup>

                                        <Button variant="dashed">
                                          <Add fontSize="small" sx={{
                                  color: "grey.600"
                                }} />
                                        </Button>
                                      </FlexBox>

                                      <Small sx={{
                              marginLeft: 1,
                              fontWeight: 500,
                              padding: "5px 15px",
                              borderRadius: "20px",
                              color: "text.secondary",
                              backgroundColor: "action.hover"
                            }}>
                                        3 Weeks Left
                                      </Small>
                                    </FlexBetween>
                                  </Card>;
                      }}
                            </Draggable>;
                  })}
                        {provided.placeholder}
                      </DroppableWrapper>;
              }}
                </Droppable>
              </Card>
            </Grid>;
      })}
      </DragDropContext>
    </Grid>;
};

export default Todo;