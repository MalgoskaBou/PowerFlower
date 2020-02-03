const confirmLinkEmailTemplate = url => {
  return `<html> 
                <body>
                    <strong>
                        Klawiszuj w link
                        <a href="http://${url}">Confirm email (${url})</a>
                    </strong>
                </body>
            </html>`;
};

module.exports = confirmLinkEmailTemplate;
