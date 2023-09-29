/**
 * Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
 * 
 * Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
 */
async function registerUser({ body }) {
  const { email, name, avatar } = body;

  if (avatar) { 
    if(name) {
      const hasAlreadyUserWithThisEmail  = getUserByEmail(email)

      if (hasAlreadyUserWithThisEmail) {
        return { error: 'email already used' }
      }

      const avatarImageConvertedToJPG = convertImageToJPG(avatar)

      const registeredUser = await createUser({ email, name, avatar: avatarImageConvertedToJPG })

      return { registeredUser }
    }
    return { error: 'name is required' }
  }
  return { error: 'avatar is required' }
}