export default function waitFor(
  conditionFunction: () => Promise<boolean>,
  timeout = 10e3
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const t0 = Date.now()
    const dt = 100
    async function check() {
      const ans = await conditionFunction()
      if (ans) {
        resolve(ans)
      } else if (Date.now() > t0 + timeout) {
        reject(new Error('Timeout'))
      } else {
        window.setTimeout(check, dt)
      }
    }
    check()
  })
}