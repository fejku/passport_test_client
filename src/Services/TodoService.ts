export default {
  getTodos: () => {
    return fetch("/user/todos")
    .then(respone => {
      if (respone.status !== 401) {
        return respone.json().then(data => data);
      } else {
        return {message: {msgBody: "UnAuthorized", msgError: true}};
      }
    })
  },

  postTodo: (todo: any) => {
    return fetch("/user/todo", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(respone => {
      if (respone.status !== 401) {
        return respone.json().then(data => data);
      } else {
        return {message: {msgBody: "UnAuthorized", msgError: true}};
      }
    });
  }
}