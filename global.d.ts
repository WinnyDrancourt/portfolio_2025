declare module '*.png' {
  const value: string
  export default value
}

declare module '~images/*' {
  const value: any
  export default value
}
