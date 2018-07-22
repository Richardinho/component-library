const sentinel = document.getElementById('sentinel');
const items = [];

const setSentinelPosition = (sentinel, top) => {
  sentinel.style.top = top;
};

setSentinelPosition(sentinel, '200px');
