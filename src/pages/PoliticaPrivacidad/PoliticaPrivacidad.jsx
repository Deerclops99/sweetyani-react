import "./PoliticaPrivacidad.css";

const EMAIL = "vverareinoso@gmail.com";
const ULTIMA_ACTUALIZACION = "4 de octubre de 2026";

function PoliticaPrivacidad() {
  return (
    <section className="privacidad">
      <h1>🔒 Política de Privacidad</h1>
      <p className="privacidad-fecha">
        Última actualización: {ULTIMA_ACTUALIZACION}
      </p>

      <p>
        En Sweet Yani respetamos tu privacidad. Esta política explica qué
        información se recopila, cómo se usa y qué opciones tenés cuando
        visitás nuestro sitio web o usás nuestras aplicaciones para Android.
      </p>

      <div className="privacidad-card">
        <h2>🏠 Quiénes somos</h2>
        <p>
          Sweet Yani es un emprendimiento de Montevideo, Uruguay, responsable
          de este sitio web y de las aplicaciones móviles publicadas bajo su
          nombre en Google Play. Cuando decimos "el sitio", nos referimos a
          esta web; cuando decimos "las apps", a nuestras aplicaciones para
          Android.
        </p>
      </div>

      <div className="privacidad-card">
        <h2>📋 Información que recopilamos</h2>
        <h3>Datos que nos brindás voluntariamente</h3>
        <p>
          Si nos escribís por WhatsApp, email, redes sociales o formulario,
          recibimos los datos que decidas compartir: por ejemplo tu nombre,
          teléfono y el detalle de tu pedido.
        </p>
        <h3>Datos de navegación del sitio</h3>
        <p>
          Mediante cookies y tecnologías similares se recopilan datos no
          personales de forma automática: páginas visitadas, tiempo en el
          sitio, tipo de dispositivo y navegador, y dirección IP aproximada.
        </p>
        <h3>Datos en las apps</h3>
        <p>
          Nuestras apps no requieren registro, cuenta ni inicio de sesión, y
          nosotros no te pedimos nombre, email ni otros datos personales. Sin
          embargo, los servicios de anuncios de Google que incluyen (ver más
          abajo) pueden recopilar automáticamente datos como el identificador
          de publicidad de tu dispositivo, la dirección IP, información del
          dispositivo y del sistema operativo, y tus interacciones con los
          anuncios.
        </p>
      </div>

      <div className="privacidad-card">
        <h2>📱 Nuestras apps para Android</h2>
        <ul>
          <li>Son gratuitas y no necesitan crear una cuenta para usarlas.</li>
          <li>
            No solicitamos acceso a tus contactos, fotos, micrófono ni
            ubicación precisa. Si alguna app necesitara un permiso, lo
            explicaremos en la propia app y en su ficha de Google Play antes
            de pedirlo.
          </li>
          <li>
            Los datos que una app guarde para funcionar (por ejemplo, tus
            preferencias) quedan almacenados en tu dispositivo y podés
            borrarlos desinstalando la app o eliminando sus datos desde los
            ajustes de Android.
          </li>
        </ul>
      </div>

      <div className="privacidad-card">
        <h2>📢 Publicidad y cookies</h2>
        <p>
          Para mantener el sitio y las apps gratuitos, mostramos anuncios de
          Google: <strong>Google AdSense</strong> en el sitio web y{" "}
          <strong>Google AdMob</strong> en las apps. Google y sus socios
          publicitarios pueden usar cookies y el identificador de publicidad
          del dispositivo para mostrar anuncios basados en tus visitas y uso
          anteriores de este y otros sitios o aplicaciones.
        </p>
        <p>Podés controlar o limitar estos anuncios así:</p>
        <ul>
          <li>
            Desde la{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Configuración de anuncios de Google
            </a>{" "}
            podés desactivar la personalización de anuncios.
          </li>
          <li>
            En Android, entrá a <strong>Ajustes → Google → Anuncios</strong>{" "}
            para restablecer tu identificador de publicidad o desactivar la
            personalización.
          </li>
          <li>
            En{" "}
            <a
              href="https://www.aboutads.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.aboutads.info
            </a>{" "}
            podés rechazar cookies de publicidad de otros proveedores.
          </li>
          <li>
            Desde la configuración de tu navegador podés bloquear o borrar
            cookies, aunque algunas funciones del sitio podrían verse
            afectadas.
          </li>
        </ul>
        <p>
          Podés conocer cómo Google usa la información de sitios y apps que
          usan sus servicios en{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/technologies/partner-sites
          </a>
          . Si la ley de tu región lo exige, te pediremos tu consentimiento
          antes de mostrar anuncios personalizados.
        </p>
      </div>

      <div className="privacidad-card">
        <h2>🎯 Cómo usamos la información</h2>
        <ul>
          <li>Responder tus consultas y gestionar tus pedidos.</li>
          <li>Mantener, proteger y mejorar el sitio y las apps.</li>
          <li>Mostrar anuncios que permiten que todo siga siendo gratuito.</li>
          <li>Cumplir con obligaciones legales.</li>
        </ul>
        <p>
          La información de contacto que nos brindás se usa exclusivamente para
          esos fines. <strong>No vendemos tus datos personales</strong> ni los
          compartimos con terceros, salvo lo necesario para procesar un pedido
          (por ejemplo, un servicio de envío) o lo que implique el
          funcionamiento de los servicios de Google descritos arriba.
        </p>
      </div>

      <div className="privacidad-card">
        <h2>🔗 Enlaces y servicios de terceros</h2>
        <p>
          El sitio puede contener enlaces a redes sociales (Instagram,
          WhatsApp, Facebook) y a otros sitios. Los anuncios pueden llevarte a
          páginas externas. No somos responsables de las políticas de
          privacidad ni del contenido de esos terceros, por lo que te
          recomendamos revisarlas.
        </p>
      </div>

      <div className="privacidad-card">
        <h2>🌎 Almacenamiento y transferencias</h2>
        <p>
          Servicios como Google pueden procesar datos en servidores ubicados
          fuera de Uruguay. Esos proveedores aplican sus propias medidas de
          seguridad y políticas de privacidad.
        </p>
      </div>

      <div className="privacidad-card">
        <h2>🛡️ Conservación y seguridad</h2>
        <p>
          Conservamos los datos de contacto solo el tiempo necesario para
          atender tu consulta o pedido. Aplicamos medidas razonables para
          proteger la información, pero ningún sistema de internet es
          completamente seguro.
        </p>
      </div>

      <div className="privacidad-card">
        <h2>⚖️ Tus derechos</h2>
        <p>
          De acuerdo con la Ley N.º 18.331 de Protección de Datos Personales de
          Uruguay, podés solicitar el acceso, la rectificación, la
          actualización, la inclusión o la supresión de tus datos personales.
          Para hacerlo, escribinos al email de contacto indicando tu pedido.
          También podés presentar una denuncia ante la Unidad Reguladora y de
          Control de Datos Personales (URCDP).
        </p>
      </div>

      <div className="privacidad-card">
        <h2>🧒 Menores de edad</h2>
        <p>
          El sitio y las apps no están dirigidos a menores de 13 años y no
          recopilamos a sabiendas datos personales de ellos. Si creés que un
          menor nos envió información, escribinos y la eliminaremos.
        </p>
      </div>

      <div className="privacidad-card">
        <h2>🔄 Cambios en esta política</h2>
        <p>
          Podemos actualizar esta política cuando cambien el sitio, las apps o
          la normativa. Publicaremos la versión vigente en esta página con su
          fecha de actualización. Si seguís usando el sitio o las apps después
          de un cambio, entendemos que lo aceptás.
        </p>
      </div>

      <div className="privacidad-card">
        <h2>✅ Consentimiento</h2>
        <p>
          Al usar el sitio o las apps, aceptás esta Política de Privacidad.
        </p>
      </div>

      <div className="privacidad-card">
        <h2>✉️ Contacto</h2>
        <p>
          Si tenés dudas sobre esta política o sobre tus datos, escribinos a{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </div>

      <p className="agradecimiento">
        💖 Gracias por confiar en Sweet Yani.
      </p>
    </section>
  );
}

export default PoliticaPrivacidad;