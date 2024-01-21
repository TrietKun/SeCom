import AgoraUIKit from 'agora-rn-uikit';

      const App = () => {
        const connectionData = {
          appId: '32d740730a2a4ef5a76bea03c694a608',
          channel: 'test',
          token: '007eJxTYFj5dxGXUf681s7liTe1GHfXd5U7rk70WsbhkcsqfPWfwScFBmOjFHMTA3Njg0SjRJPUNNNEc7Ok1EQD42QzS5NEMwOLBrtVqQ2BjAxPVk1hZGSAQBCfhaEktbiEgQEAF2wfDg', // enter your channel token as a string 
         };
        return(
          <AgoraUIKit connectionData={connectionData} />
         )
      }

      export default App; 