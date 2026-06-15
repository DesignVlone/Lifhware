body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: black;
  color: white;
  overflow-x: hidden;
}

/* background glow */
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,0,0,0.15), black 70%);
  z-index: -1;
}

.center {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vault-box {
  text-align: center;
  padding: 30px;
  border: 1px solid red;
  box-shadow: 0 0 25px red;
  border-radius: 12px;
  background: rgba(0,0,0,0.8);
}

.title {
  font-size: 40px;
  letter-spacing: 4px;
  color: red;
  text-shadow: 0 0 10px red;
}

.subtitle {
  opacity: 0.7;
  margin-bottom: 20px;
}

.wheel-container {
  margin: 20px auto;
  width: 120px;
  height: 120px;
  border: 2px solid red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wheel {
  width: 80px;
  height: 80px;
  border: 3px solid red;
  border-radius: 50%;
  animation: spin 3s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.enter-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background: red;
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 10px red;
}

.enter-btn:hover {
  transform: scale(1.05);
}

.hidden {
  display: none;
}

/* MAIN SITE */
header {
  text-align: center;
  padding: 40px 20px;
}

.glow {
  color: red;
  text-shadow: 0 0 10px red;
}

.panel {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid red;
  box-shadow: 0 0 20px red;
  border-radius: 10px;
}

.buy-btn {
  display: inline-block;
  margin-top: 15px;
  padding: 12px 18px;
  background: red;
  color: black;
  text-decoration: none;
  font-weight: bold;
}
