// Configurações centralizadas para reduzir a exposição direta de dados sensíveis em marcação HTML.
// Os valores são reconstruídos apenas em tempo de execução.
const contactConfig = {
  emails: {
    primary: 'YnJheWFuLnJvZHJpZ3Vlc0Bjb3JlZGIuY29tLmJy',
    cc: 'aGVucmlxdWUuYXJhdWpvQGNvcmVkYi5jb20uYnI=',
  },
  whatsapp: {
    phone: 'KzU1IDM4IDk4NjItMjQyOA==', // base64 de 553988622428
  },
};

function decodeBase64(value) {
  try {
    return atob(value);
  } catch (error) {
    return '';
  }
}
