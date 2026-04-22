export function OnlyMobile(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const width = window.innerWidth;
    const mobileBreakpoint = 768;

    if (width < mobileBreakpoint) {
      return originalMethod.apply(this, args);
    } else {
      console.warn(
        `A função "${propertyKey}" foi bloqueada: largura da tela (${width}px) é maior que o limite.`,
      );
    }
  };

  return descriptor;
}
