const URLModifier = (url: string, vague: string, value: string) => {
  return url.replace(vague, value)
}

export {
  URLModifier
}