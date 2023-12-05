export function singleton<Value>(name: string, value: () => Value): Value {
  const g = global as any
  g.__singletons ??= {}
  g.__singletons[name] ??= value()
  return g.__singletons[name]
}
