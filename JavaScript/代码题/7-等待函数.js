function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('start');
  await wait(2000); // 等待2秒钟
  console.log('end');
}

run();  