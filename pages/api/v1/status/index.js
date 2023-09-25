function status(request, response) {
  response.status(200).json({ message: "servidor ativo!" });
}

export default status;
