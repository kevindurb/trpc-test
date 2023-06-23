/* @name getAllTodos */
select
  id,
  name
from todos;

/*
  @name createTodo
  @param todos -> ((name)...)
*/
insert into todos (name) values :todos returning *;
