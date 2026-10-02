import http from 'http';

const API_URL = 'http://localhost:3335';

function checkBackend() {
  console.log('\n----------------------------------------');
  console.log('🔍 Checando conexão com o Back-end NestJS...');

  const req = http.get(API_URL, (res) => {
    console.log('🟢 [FRONT-END STATUS: OK] - Conectado ao Back-end NestJS!');
    console.log(`🔗 Endpoint da API respondendo em: ${API_URL}`);
    console.log('----------------------------------------\n');
  });

  req.on('error', (err) => {
    console.log('🔴 [FRONT-END STATUS: OFFLINE] - Falha ao conectar no Back-end!');
    console.log(`⚠️  Tentou acessar: ${API_URL}`);
    console.log('💡 Certifique-se de que o NestJS e o PostgreSQL estão rodando.');
    console.log('----------------------------------------\n');
  });

  req.setTimeout(3000, () => {
    req.destroy();
  });
}

checkBackend();