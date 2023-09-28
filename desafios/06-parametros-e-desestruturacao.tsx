function updateUserRoute({body, params}) {
  const { name, email, password } = body;
  const { id } = params;

  updateUserController({ body: { name, email, password }, params: { id }})
}

function updateUserController({ body, params }) {
  userRepository.update(body, params)
}

const userRepository = {
  update: ({ name, email, password }, { id }) => {},
}