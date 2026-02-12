import React, { useEffect } from "react";

import "./PrivacyPage.css";
import image from "../assets/desktop/Other/Texture_tail.png";
import buttonlayout from "../assets/registration/Button_Continuar.png";
import brushNavMenu from "../assets/desktop/Registro/IMG_Politicas de privacidad.png";
import { useNavigate } from "react-router";
const PrivacyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${image})`, padding: "20px" }}
    >
      <div style={{ width: "100%", minHeight: "150px" }}></div>

      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={brushNavMenu}
          style={{
            overflow: "visible",
            objectFit: "cover",
            width: "100%",
            opacity: 1,

            maxWidth: "400px",
          }}
          alt="Close"
        />
      </div>

      <div  style={{ padding: "20px"}}>
        <div className="inter-font" style={{color: "white"}}>
          <p>
            <b>
              Le damos la bienvenida a la Política de privacidad de Activision.
              Esta Política de privacidad se actualizó por última vez el 2 de
              julio de 2025.
            </b>
          </p>
          <p>
            Millones de personas de todo el mundo utilizan los sitios web, los
            productos y los servicios de Activision, y disfrutan cada día de
            estos. Agradecemos su confianza en nuestros productos y servicios.
            Para ofrecerle juegos excelentes y poder seguir mejorándolos,
            Activision Publishing, Inc. (“<b>Activision</b>”) recopilará
            información personal y no personal (conjuntamente “
            <b>Información</b>”) y se desempeñará como controlador de datos con
            respecto a su información personal. Controlamos la forma en que se
            trata y se utiliza su información.
          </p>
          <p>Esta Política de privacidad:</p>
          <ul>
            <li>
              explica la forma en que Activision recopila, almacena,
              utiliza&nbsp;y transfiere o divulga<b> </b>su<b> </b>Información;
            </li>
            <li>
              se aplica a todos los sitios web, productos y servicios de
              Activision (“<b>Propiedades</b>”).
            </li>
          </ul>
          <p>
            <b>Jóvenes. </b>Los jóvenes y sus padres pueden preferir comenzar
            con la página de{" "}
            <a href="https://www.activision.com/mx/es/legal/privacy-young-people">
              Privacidad para jóvenes
            </a>
            . Esa página destaca información que puede ser útil para los jóvenes
            y sus padres.
          </p>
          <p>
            Activision, las empresas del grupo Activision Blizzard y nuestros
            socios, tales como los socios de marketing y los proveedores de
            análisis de datos, podrían utilizar tecnologías de rastreo, como
            cookies y/o tecnologías similares, en las Propiedades. Para obtener
            más información sobre el uso de cookies por parte de Activision y
            cómo puede denegar o retirar su consentimiento para el uso de sus
            datos con fines publicitarios focalizados, consulte nuestra{" "}
            <a href="https://www.activision.com/mx/es/legal/cookie-policy">
              Política de cookies
            </a>
            , que también se incorpora como referencia a esta Política de
            privacidad y forma parte de esta. Si tiene alguna duda con respecto
            al suministro de sus datos o el uso de los mismos de acuerdo con
            esta Política de privacidad, recomendamos no utilizar nuestras
            Propiedades.
          </p>
          <p>
            Activision se reserva el derecho de cambiar esta Política de
            privacidad en cualquier momento mediante la publicación de una
            versión modificada en línea en{" "}
            <a href="https://www.activision.com/mx/es/es_mx/legal/privacy-policy">
              https://www.activision.com/es_mx/legal/privacy-policy
            </a>
            , por lo que debe revisarla regularmente para asegurarse de estar al
            tanto de cualquier cambio realizado. Si realizamos un cambio
            sustancial en esta Política de privacidad, le enviaremos la
            notificación correspondiente de acuerdo con los requisitos legales.
            En tal caso, el uso continuo de las Propiedades después del aviso de
            publicación o el aviso sobre cambios implicará su reconocimiento de
            la última versión de esta Política y de cualquier revisión que se
            haga de ella en el futuro.
          </p>
          <p>
            Tenga en cuenta que el uso de este sitio web, producto o servicio de
            Activision también está sujeto a los términos del Contrato de
            licencia de usuario final de Activision, disponible&nbsp;
            <a href="https://support.activision.com/license">aquí</a>, y a las
            Condiciones de uso disponibles&nbsp;
            <a href="https://www.activision.com/mx/es/legal/terms-of-use">
              aquí
            </a>
            .
          </p>
          <p>
            <b>Tabla de contenidos</b>
          </p>
          <p>
            <b>
              <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc1">
                1. Alcance de la Política de privacidad de Activision
              </a>
            </b>
          </p>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc2">
              <b>2. Programa con certificación de privacidad de ESRB</b>
            </a>
          </p>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc3">
              <b>3. Qué información recopilamos y cómo la utilizamos</b>
            </a>
          </p>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc4">
              <b>4. Niños y padres</b>
            </a>
          </p>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc5">
              <b>5. Sus opciones</b>
            </a>
          </p>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc6">
              <b>6. Divulgación de información</b>
            </a>
          </p>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc7">
              <b>7. Seguridad</b>
            </a>
          </p>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc8">
              <b>8. Información sobre su cuenta y su período de retención</b>
            </a>
          </p>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc9">
              <b>9. Contacto</b>
            </a>
          </p>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc10">
              <b>10. Usuarios en los Estados&nbsp;Unidos</b>
            </a>
          </p>
          <ol>
            <li>
              <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc10a">
                <b>Sus derechos de privacidad en EE.&nbsp;UU.</b>
              </a>
            </li>
            <li>
              <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc10b">
                <b>
                  Información adicional sobre la privacidad para residentes de
                  California
                </b>
              </a>
            </li>
            <li>
              <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc10c">
                <b>Información sobre la privacidad para residentes de Nevada</b>
              </a>
            </li>
          </ol>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc11">
              <b>11. Usuarios en el EEE y el Reino Unido</b>
            </a>
          </p>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc12">
              <b>
                12. Divulgación para usuarios fuera de los EE.&nbsp;UU., el EEE
                y el Reino&nbsp;Unido
              </b>
            </a>
          </p>
          <p>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc13">
              <b>13. Divulgación para usuarios en Japón</b>
            </a>
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc1"></a>1. Alcance de la Política de privacidad de
              Activision
            </b>
          </p>
          <p>
            Esta Política de privacidad se aplica a todas las Propiedades, las
            cuales incluyen lo siguiente:
          </p>
          <ul>
            <li>sitios web de Activision, productos y servicios en línea;</li>
            <li>juegos de consola de Activision; y</li>
            <li>aplicaciones y juegos móviles Activision.</li>
          </ul>
          <p>
            Esta Política de privacidad no se aplica a sitios web, propiedades
            en línea o sistemas de terceros que puedan tener un enlace en
            nuestras Propiedades o a través de los cuales se pueda acceder a
            nuestras Propiedades, y usted acepta que Activision no es
            responsable de las prácticas de seguridad o privacidad de tales
            sitios web, propiedades o sistemas de terceros. En algunas
            ocasiones, podríamos dirigirlo a un sitio operado por un proveedor o
            socio. Si bien la página en la que proporciona información podría
            tener el aspecto y el estilo de nuestras Propiedades, la
            recopilación de información realizada por nuestro proveedor o socio
            a través de tal página podría regirse por una política de privacidad
            distinta.
          </p>
          <p>
            Esta Política de privacidad no se aplica a la Información que
            proporciona cuando se postula a un trabajo en Activision. Para
            obtener más información, consulte&nbsp;
            <a href="https://www.activision.com/mx/es/legal/applicant-privacy-policy">
              aquí
            </a>
            .
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc2"></a>2. Programa de certificación de privacidad
            </b>
            &nbsp;<b>de ESRB</b>
          </p>
          <p>
            Activision es licenciatario válido y miembro participante del&nbsp;
            <a href="http://www.esrb.org/privacy/faq.aspx#10">
              Programa de certificación de privacidad del Consejo de
              Calificación de Software de Entretenimiento
            </a>
            &nbsp;(“<b>Certificación de privacidad de ESRB</b>”). Hemos adoptado
            de forma voluntaria esta iniciativa de privacidad con el fin de
            proteger su privacidad. El Programa de certificación de privacidad
            de ESRB ha realizado la revisión y certificación correspondientes a
            fin de declarar nuestra conformidad con las prácticas establecidas
            de recopilación y uso de información en línea en todas las
            Propiedades de Activision en las que se publica esta Política de
            privacidad y se muestra el sello de Certificación de privacidad.
          </p>
          <p>
            Como parte del Programa de certificación de privacidad de ESRB,
            estamos sujetos a la auditoría de nuestras Propiedades y a otros
            mecanismos de cumplimiento y rendición de cuentas administrados
            independientemente por el Programa de certificación de privacidad de
            ESRB.
          </p>
          <p>
            Cada vez que visite las Propiedades que muestren el sello de
            Certificación de privacidad de ESRB, podrá solicitar información
            para saber lo siguiente:
          </p>
          <ul>
            <li>
              si una empresa utiliza cookies, rastrea direcciones IP o utiliza
              otros medios pasivos para recopilar información;
            </li>
            <li>
              quién, de ser el caso, está recopilando su información personal y
              cómo se utilizará;
            </li>
            <li>
              con quién, de ser el caso, se compartirá su información personal;
            </li>
            <li>
              qué opciones tiene con respecto al uso de su información personal;
            </li>
            <li>
              cómo puede acceder a la información personal que recopila y
              conserva una empresa y cómo puede cambiarla;
            </li>
            <li>
              si se recopila información acerca de niños menores de 13&nbsp;años
              y cómo se la recopila;
            </li>
            <li>
              cómo una empresa garantiza la seguridad, la calidad y la
              integridad de los datos;
            </li>
            <li>dónde y cómo hacer preguntas o presentar quejas.</li>
          </ul>
          <p>
            <i>
              EXENCIÓN DE RESPONSABILIDAD: Si bien el Programa de certificación
              de privacidad de ESRB no supervisa las Propiedades en idiomas
              distintos del inglés, Activision hace todo lo posible para
              garantizar que las Propiedades en idiomas distintos del inglés
              cumplan con las pautas y los principios aplicables de recopilación
              de datos dispuestos por el Programa de certificación de privacidad
              de ESRB, incluido el cumplimiento de los reglamentos de la UE y
              otros reglamentos territoriales fuera de los EE.&nbsp;UU.
            </i>
          </p>
          <p>
            Si cree que no hemos respondido a su consulta o que su consulta no
            fue resuelta de manera satisfactoria, comuníquese con el Programa de
            certificación de privacidad de ESRB en:{" "}
            <a href="http://www.esrb.org/privacy/contact">
              http://www.esrb.org/privacy/contact
            </a>
            ; o <a href="mailto:privacy@esrb.org">privacy@esrb.org</a>.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc3"></a>3. Qué información recopilamos y cómo la
              utilizamos
            </b>
          </p>
          <p>
            Activision recopila su Información a través de usted y de otras
            fuentes. Tal como se describe en mayor detalle a continuación, así
            como en la&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc10">
              Sección 10
            </a>
            &nbsp;para los residentes en EE.&nbsp;UU., utilizamos y, en casos
            específicos, combinamos esa Información para operar, adaptar
            contenidos, personalizar, ajustar y mejorar nuestras Propiedades,
            así como para enviarle mensajes o información personalizada sobre
            nuestros juegos, sus puntuaciones, nuevas funciones, etc., incluso
            con fines de promoción y marketing. Además, utilizamos su
            Información para gestionar nuestro negocio, lo que incluye el
            análisis de nuestro rendimiento, la realización de investigaciones,
            el cumplimiento de nuestras obligaciones legales y nuestros fines de
            contratación en EE.&nbsp;UU.
          </p>
          <p>
            <b>Información que usted proporciona</b>
          </p>
          <p>
            Tal como se describe en más detalle a continuación, Activision puede
            recibir información de usted cuando sucede lo siguiente: (A) crea
            una cuenta de Activision en una Propiedad; (B) usa nuestras
            Propiedades; (C) participa en sorteos, concursos y promociones; (D)
            usa el servicio de atención al cliente de Activision; (E) opta por
            recibir boletines informativos sobre productos y servicios, recibir
            correos electrónicos de marketing o participar en
            encuestas/investigaciones; (F) recibe publicidad móvil; (G) compra
            servicios o productos de Activision en línea; o (H) acepta compartir
            contenidos a través de las redes sociales.
          </p>
          <p>
            <b>A. Crear una cuenta en Activision</b>
          </p>
          <p>
            Activision recopilará cierta información acerca de usted cuando se
            registre en una Propiedad. La información personal recopilada
            durante el registro incluye su nombre y apellido, dirección de
            correo electrónico, nombre de usuario y, en casos específicos,
            número de teléfono. Esta información personal se combina con otra
            Información como su fecha de nacimiento, país, e información acerca
            de su interés en los distintos productos, programas y servicios y el
            uso que hace de ellos, así como sus preferencias de marketing.
            Además, recopilamos y combinamos Información cuando usted vincula
            una cuenta de terceros (por ejemplo, XBOX Live, PlayStation Network,
            Steam y Battle.net) a su cuenta de Activision, como el nombre de
            usuario o identificación de usuario asociados con su cuenta de
            terceros; el uso de ciertas Propiedades podría requerir que vincule
            una cuenta de terceros a su cuenta Activision.
          </p>
          <p>
            <b>B. Uso de nuestras Propiedades</b>
          </p>
          <p>
            Cuando visita o utiliza nuestras Propiedades, recopilamos, tratamos
            y/o combinamos Información acerca del uso que hace de estas
            Propiedades, como los sitios web que visitó antes y después de
            utilizar una Propiedad, el tipo de navegador que usa y su idioma, su
            dirección IP, la información sobre su hardware y su software, el
            identificador de publicidad, la información sobre cuentas de
            terceros (por ejemplo, el nombre de usuario asociado a su cuenta de
            XBOX Live, PlayStation Network, Steam o Battle.net), los datos de
            juego, las comunicaciones, los datos de uso, las historiales de
            compra y los datos de las Redes sociales. Utilizamos Cookies o
            tecnologías similares (conjuntamente “<b>cookies</b>”) para este
            fin. Además, nosotros o nuestros socios también utilizamos Cookies e
            ID publicitarios para adaptar y entregar anuncios para nuestros
            productos y servicios o los productos y servicios de un socio, y
            para medir la eficacia de la publicidad en nuestras Propiedades y
            otras propiedades en línea de terceros. Consulte nuestra{" "}
            <a href="https://www.activision.com/mx/es/legal/cookie-policy">
              Política de cookies
            </a>{" "}
            para obtener más detalles.
          </p>
          <p>
            Activision recopila, trata y combina datos acerca de usted que
            pueden incluir: edad, sexo, intereses, nombre, dirección de correo
            electrónico, datos de juego, preferencias de marketing, historial de
            servicio de atención al cliente e información relacionada con sus
            dispositivos.
          </p>
          <p>
            Activision también muestra públicamente cierta información acerca de
            usted, como datos de cuentas de terceros y datos de juego, en sus
            Propiedades o en propiedades gestionadas por socios externos o
            licenciatarios. Por ejemplo, su nombre de usuario de PlayStation se
            mostrará en las tablas de clasificación si es un jugador destacado
            de un juego de Activision, independientemente de que tenga una
            cuenta en Activision. Si ha sincronizado una cuenta de terceros con
            su cuenta de Activision, nosotros o nuestros socios externos o
            licenciatarios podríamos poner su nombre de usuario a disposición de
            otros usuarios si no ha desactivado esta función. En cualquier
            momento, usted podrá desvincular la cuenta de terceros, impedir que
            aparezca en búsquedas o impedir que su información se comparta con
            socios externos o licenciatarios al configurar sus preferencias en
            su perfil de Activision.
          </p>
          <p>
            Para proporcionar una experiencia de juego justa a todos los
            jugadores, Activision utiliza tecnologías antifraude, antitrampa y
            antitoxicidad para prevenir las trampas y el mal comportamiento en
            nuestros juegos. Además de la información ya descrita, Activision
            podría monitorear o registrar sus juegos y comunicaciones
            (incluidas, entre otras, comunicaciones por chat o de voz) y las
            actividades desarrolladas en su dispositivo, incluida información
            sobre los programas que se ejecutan paralelamente al juego, tal como
            se describe en las Condiciones de uso aplicables o en el Contrato de
            licencia de usuario final.
          </p>
          <p>
            <b>C. Sorteos, concursos y promociones</b>
          </p>
          <p>
            Cuando Activision realiza concursos o promociones en las
            Propiedades, recopilamos información de los participantes, como su
            nombre, dirección, código postal, dirección de correo electrónico,
            número de teléfono, edad o fecha de nacimiento u otra información o
            contenido que usted pueda ingresar. Es posible que también
            necesitemos recopilar información adicional para que pueda reclamar
            un premio. Esa Información se combinará con otros datos de la cuenta
            y se utilizará y compartirá de acuerdo con esta Política de
            privacidad.
          </p>
          <p>
            <b>D. Interactuar con el Servicio de atención al cliente</b>
          </p>
          <p>
            Para poder ofrecerle servicio de atención al cliente y ayudarlo a
            resolver cualquier problema que pueda tener, Activision recopila
            Información proporcionada por usted, incluida la información de
            contacto, así como los detalles del problema presentado ante el
            Servicio de atención al cliente y su resolución.
          </p>
          <p>
            <b>
              E. Recibir boletines informativos sobre productos y servicios,
              anuncios de marketing, encuestas o investigaciones
            </b>
          </p>
          <p>
            Activision le ofrece la posibilidad de recibir periódicamente
            boletines informativos o anuncios de marketing por correo
            electrónico, por notificaciones en la aplicación o por SMS en los
            países elegibles, a fin de informarle sobre nuestros productos y
            servicios o sobre productos y servicios que puedan interesarle. En
            ocasiones, también podemos enviarle encuestas o realizar
            investigaciones para mejorar la experiencia de los jugadores con
            nuestros juegos. En cualquier momento podrá administrar las
            preferencias desde la configuración de su cuenta y dejar de recibir
            boletines informativos, cancelando la suscripción desde el enlace
            que se encuentra al pie de cada correo electrónico que le enviamos,
            desactivando las notificaciones en la aplicación o siguiendo las
            instrucciones que le enviaremos por SMS. Si reside en EE.&nbsp;UU.,
            está sujeto a las{" "}
            <a href="https://www.activision.com/mx/es/legal/sms-terms-of-use">
              Condiciones de uso de SMS
            </a>
            .
          </p>
          <p>
            <b>F. Publicidad móvil</b>
          </p>
          <p>
            Nuestros juegos móviles pueden incluir publicidad para productos y
            servicios de terceros. Si acepta la publicidad focalizada, o lo
            incorporan para recibirla, nosotros y nuestros socios publicitarios
            recopilaremos, compartiremos y utilizaremos la Información tal y
            como se establece en esta sección y se describe con más detalle en
            las políticas de privacidad de nuestros socios publicitarios. Cuando
            lo permita la legislación aplicable, podemos incorporarlo para
            recibir publicidad focalizada de forma predeterminada.
          </p>
          <p>
            Cuando usa nuestros juegos móviles, recopilamos y compartimos
            Información con nuestros socios anunciantes, incluidos los
            identificadores de publicidad, los identificadores no personales y
            otros datos de su dispositivo móvil, para permitir el suministro
            técnico de anuncios a su dispositivo. Nuestros socios publicitarios
            pueden combinar esta Información con información que hayan
            recopilado sobre usted cuando utiliza sus servicios (o los sitios
            web o servicios de terceros). Tanto nosotros como nuestros socios
            publicitarios podemos utilizar la Información para ofrecerle
            anuncios más relevantes en nuestros juegos móviles o para mejorar la
            precisión de los sistemas de focalización y medición. Recomendamos
            que revise las políticas de privacidad de nuestros socios
            anunciantes para obtener más información. Podrá acceder a estas
            políticas en nuestra{" "}
            <a href="https://www.activision.com/mx/es/legal/cookie-policy">
              Política de cookies
            </a>
            .
          </p>
          <p>
            Puede revisar sus opciones para gestionar y rechazar la publicidad
            móvil (1) revisando el manual o las instrucciones pertinentes
            proporcionadas por el fabricante del dispositivo y configurando los
            ajustes del dispositivo en consecuencia. La mayoría de los
            dispositivos móviles proporcionarán ajustes para rechazar o eliminar
            cookies de su dispositivo móvil, o para limitar el uso de su ID de
            publicidad, restablecer su ID de publicidad o rechazar la publicidad
            focalizada; o (2) ingresando a
            https://optout.networkadvertising.org/?c=1 o, si se encuentra en el
            EEE, Suiza, Turquía o el Reino&nbsp;Unido,{" "}
            <a href="http://youronlinechoices.com">
              http://youronlinechoices.com
            </a>{" "}
            para elegir la opción de no recibir publicidad. También puede hacer
            clic en el logotipo de AdChoices en un anuncio (cuando esté
            disponible).
          </p>
          <p>
            Tenga en cuenta que configurar sus preferencias, tal como se
            describe en esta sección, no significa que dejará de recibir
            anuncios, sino que los anuncios que verá serán menos relevantes para
            sus intereses. Además, seguiremos usando cookies para proporcionarle
            anuncios que podrían ser menos relevantes para usted; por ejemplo,
            podríamos usarlas para disminuir la frecuencia (es decir, para
            controlar la cantidad máxima de veces que pueda ver el mismo anuncio
            publicado por nosotros).
          </p>
          <p>
            <b>G. Comprar productos o servicios de Activision en línea</b>
          </p>
          <p>
            Activision no recopila información de tarjeta de crédito o
            facturación cuando compra productos o servicios (como contenidos
            digitales) en línea. Sin embargo, es posible que tenga que
            proporcionar información de tarjeta de crédito o facturación a uno
            de nuestros proveedores externos para completar una compra. Le
            recomendamos revisar la política de privacidad de nuestros
            proveedores externos antes de proporcionarles su información
            personal, ya que sus prácticas de privacidad podrían ser distintas a
            las nuestras. En el momento de la compra, en casos específicos,
            también tiene la opción de proporcionar información (como su
            dirección de correo electrónico) a Activision a fin de recibir
            información u ofertas adicionales.
          </p>
          <p>
            <b>D. Redes sociales</b>
          </p>
          <p>
            Puede interactuar con algunas Propiedades a través de sitios de
            redes sociales, como Facebook y Twitter (o complementos y
            aplicaciones de redes sociales), (“<b>Redes sociales</b>”). Cuando
            interactúa con Activision o con las Propiedades a través de Redes
            sociales, reconoce que accedemos a su Información, como su nombre,
            nombre de usuario o imagen de perfil, únicamente a través de la
            configuración de privacidad de sus Redes sociales, y que la usamos
            para personalizar contenido, focalizar los anuncios de marketing y
            mejorar y ajustar la experiencia del usuario en relación con las
            Propiedades de Activision, además de (1) proporcionarle contenido
            exclusivo; (2) personalizar su experiencia en línea con nosotros,
            tanto dentro como fuera de nuestras Propiedades; y (3) contactarlo
            según las preferencias de marketing aplicables a través de Redes
            sociales, incluso mediante el suministro de anuncios de marketing
            personalizado o en forma directa mediante el envío de noticias,
            ofertas especiales y premios.
          </p>
          <p>
            Cuando comparta información personal públicamente a través de las
            Propiedades o en Redes sociales, será visible para otros usuarios de
            estos sitios y no podremos impedir el uso posterior de esa
            información personal por parte de terceros. Para obtener más
            información sobre cómo sus Redes sociales utilizan y protegen su
            información personal, consulte sus políticas de privacidad y
            condiciones de uso.
          </p>
          <p>
            <b>&nbsp;</b>
          </p>
          <p>
            <b>Información proporcionada por otras fuentes</b>
          </p>
          <p>
            También podemos obtener información, como detalles de contacto (por
            ejemplo, su nombre y su dirección de correo electrónico), país,
            dirección IP, historiales de compra, preferencias de anuncios de
            marketing, información sobre cookies, información sobre hardware y
            software, así como otra Información acerca de usted a partir de
            otras fuentes, como las empresas del grupo Activision Blizzard, las
            Redes sociales, nuestros proveedores (por ejemplo, proveedores de
            entradas para eventos, vendedores de mercancía y agregadores de
            datos) o socios (por ejemplo, anunciantes, socios de medios de
            comunicación o proveedores de plataformas [por ejemplo, Microsoft,
            Sony, Nintendo y Steam]), y combinar esa Información con la
            Información que hemos recopilado acerca de usted o que usted nos ha
            proporcionado. Solo recopilamos Información de otras fuentes cuando
            hayan confirmado que tienen el derecho legal de compartirla con
            nosotros.
          </p>
          <p>
            Utilizamos Cookies para proporcionar y respaldar nuestras
            Propiedades y cada uno de los usos resumidos y descritos
            anteriormente. Consulte nuestra{" "}
            <a href="https://www.activision.com/mx/es/legal/cookie-policy">
              Política de cookies
            </a>{" "}
            para obtener más información.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc4"></a>4. Niños y padres
            </b>
          </p>
          <p>
            Para obtener más información sobre nuestras prácticas de información
            con respecto a los niños, visite nuestra página{" "}
            <a href="https://www.activision.com/mx/es/legal/privacy-young-people">
              Privacidad para los jóvenes
            </a>
            .
          </p>
          <p>
            Reconocemos la necesidad especial de proteger la información
            personal de los niños. Instamos a los padres a indicarles a sus
            hijos que nunca faciliten su nombre real, dirección, número de
            teléfono u otra información personal sin el permiso de los padres
            cuando estén en línea. Activision también recomienda que los padres
            se familiaricen con los controles parentales disponibles en las
            consolas, los teléfonos móviles, las tabletas y otros dispositivos
            que proporcionan a sus hijos y que acompañen a sus hijos cuando
            estén en línea. Para obtener más información, consulte la página de
            Controles parentales de ESRB, disponible&nbsp;
            <a href="https://www.esrb.org/tools-for-parents/parental-controls/">
              aquí
            </a>
            . Los padres deben comunicarse inmediatamente con Activision si
            tienen alguna inquietud. Consulte la sección de&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc9">
              <b>Contacto</b>
            </a>
            &nbsp;a continuación para obtener más información.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc5"></a>5. Sus opciones
            </b>
          </p>
          <p>
            Tiene opciones con respecto a la Información proporcionada por usted
            y otras fuentes, y con respecto a cómo Activision utiliza esa
            información. Puede ejercer sus opciones en cualquier momento
            mediante la actualización de sus preferencias y también mediante la
            configuración de sus dispositivos y cuentas de terceros.
          </p>
          <p>
            <b>Sus opciones sobre la información que usted proporciona</b>
          </p>
          <p>
            Si no desea proporcionarle a Activision su información personal,
            puede optar por no hacerlo. Si decide no proporcionarnos información
            personal, es posible que no siempre podamos proporcionarle el
            producto o servicio de Activision que desee. Por ejemplo, sin
            proporcionar una dirección de correo electrónico, no podrá crear una
            cuenta con Activision.
          </p>
          <p>
            <b>Sus opciones sobre la información proporcionada por terceros</b>
          </p>
          <p>
            Es posible que pueda controlar cómo los terceros recopilan y
            comparten su Información al gestionar sus preferencias o cancelar la
            recopilación de datos directamente a aquellos terceros. Antes de
            divulgar Información a terceros, recomendamos que consulte sus
            respectivas políticas de privacidad para informarse mejor.
          </p>
          <p>
            <b>
              Sus opciones con respecto al uso de su información por parte de
              Activision
            </b>
          </p>
          <p>
            Puede decidir cómo Activision utiliza su información personal y
            actualizar sus preferencias en cualquier momento:
          </p>
          <ul>
            <li>
              Para salir de <b>concursos o promociones individuales</b>,{" "}
              <b>desvincular una cuenta de terceros</b> o impedir que aparezca
              en búsquedas o se comparta información con socios externos o
              licenciatarios, o para desactivar la recepción de anuncios de
              marketing o boletines informativos de Activision, simplemente
              acceda a su cuenta desde&nbsp;
              <a href="https://www.activision.com/mx/es/">
                https://www.activision.com/
              </a>
              &nbsp;y modifique sus preferencias. Necesitará su contraseña para
              acceder a su cuenta.
            </li>
            <li>
              Para deshabilitar las{" "}
              <b>comunicaciones de los anuncios de marketing</b>, siga las
              instrucciones en las comunicaciones que recibe. Para cancelar la
              suscripción a las comunicaciones de las empresas del grupo
              Activision Blizzard, siga las instrucciones de sus correos
              electrónicos o políticas de privacidad.
            </li>
            <li>
              Para <b>deshabilitar las Cookies seleccionadas</b> a fin de que no
              recopilen información relacionada con la eficacia de las campañas
              publicitarias o con los datos de análisis, y para que no le
              proporcionen publicidad personalizada en nuestras Propiedades o
              propiedades de terceros, consulte nuestra{" "}
              <a href="https://www.activision.com/mx/es/legal/cookie-policy">
                Política de cookies
              </a>
              .
            </li>
          </ul>
          <p>
            Si decide no recibir nuestras comunicaciones de marketing, tenga en
            cuenta que podríamos seguir contactándolo en algunas ocasiones con
            respecto al estado de su cuenta; por ejemplo, para informarle que su
            cuenta estaría por caducar o para proporcionarle otra información
            relacionada con el servicio.
          </p>
          <p>
            Si usted es un usuario que reside en el
            Espacio&nbsp;Económico&nbsp;Europeo (“<b>EEE</b>”) o en el
            Reino&nbsp;Unido y desea obtener más información sobre sus derechos
            en relación con su información personal, consulte la sección
            sobre&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc11">
              <b>Usuarios en el EEE</b>
            </a>
            &nbsp;que se encuentra a continuación.&nbsp;Si reside en
            Estados&nbsp;Unidos y desea obtener más información sobre sus
            derechos en relación con su información personal, consulte la
            sección sobre&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc10a">
              <b>Sus derechos de privacidad en EE.&nbsp;UU.</b>
            </a>
            <b>&nbsp;</b>que se encuentra a continuación.&nbsp;Si es residente
            de California o Nevada y desea conocer más sobre sus derechos en
            relación con su información personal, consulte la sección
            sobre&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc10b">
              <b>
                Información adicional sobre la privacidad para residentes de
                California
              </b>
            </a>
            &nbsp;o la sección sobre&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc10c">
              <b>Información sobre la privacidad para residentes de Nevada</b>
            </a>
            &nbsp;que aparece a continuación.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              6. Divulgación de información:
            </b>
          </p>
          <p>
            Como se establece con mayor detalle a continuación, y en la&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc10">
              Sección 10
            </a>
            &nbsp;para residentes de EE.&nbsp;UU., Activision comparte
            información:
          </p>
          <ul>
            <li>
              con las diversas empresas del grupo Activision Blizzard,
              disponibles&nbsp;
              <a href="https://www.activision.com/mx/es/legal/entities">aquí</a>
              ,&nbsp;incluso para los fines propios de las empresas del grupo,
              lo que incluye marketing (como anuncios personalizados);
            </li>
            <li>
              con proveedores, socios externos y licenciatarios contratados por
              Activision para proporcionarle bienes o servicios que ha
              solicitado o publicidad en línea seleccionada por nosotros, o para
              crear aplicaciones y sitios web que beneficien a nuestra comunidad
              de jugadores;
            </li>
            <li>
              &nbsp;si así lo exigen las leyes, los reglamentos o los procesos
              legales aplicables;
            </li>
            <li>
              si es necesario para ejercer, establecer o defender nuestros
              derechos legales;
            </li>
            <li>
              si es necesario para proteger los derechos, la propiedad o la
              seguridad de otra persona; y
            </li>
            <li>en caso de la venta de nuestra empresa o nuestros activos.</li>
          </ul>
          <p>
            Cualquier información, incluida la información personal que revele
            en tableros de anuncios, tableros de mensajes, salas de chat u otros
            foros públicos, queda visible al público.
          </p>
          <p style={{marginLeft: "40.0px"}}>
            <b>1. Empresas del grupo Activision Blizzard</b>
          </p>
          <p style={{marginLeft: "40.0px"}}>
            Divulgamos su información a las diversas empresas del grupo
            Activision Blizzard, disponibles{" "}
            <a href="https://www.activision.com/mx/es/legal/entities">aquí</a>,
            incluso para los fines propios de las empresas del grupo, lo que
            incluye marketing (como anuncios personalizados). Activision no es
            responsable de las prácticas de privacidad de las empresas del grupo
            Activision Blizzard y el uso de su Información por parte de las
            empresas del grupo (como para mejoras de productos) se regirá por
            las políticas de privacidad de cada empresa, las cuales podrá
            encontrar en sus sitios web.
          </p>
          <p style={{marginLeft: "40.0px"}}>
            <b>2. Proveedores, socios y licenciatarios</b>
          </p>
          <p style={{marginLeft: "40.0px"}}>
            Los proveedores y socios proporcionan bienes y servicios (por
            ejemplo, los proveedores de plataformas, socios de medios de
            comunicación, proveedores de entradas para eventos, vendedores de
            mercancías, proveedores del torneos, proveedores de encuestas,
            agentes de facturación, proveedores de servicios al consumidor,
            consultores, proveedores de hardware y software de tecnología de la
            información) a Activision para respaldar, operar y desarrollar las
            Propiedades y para entregar comunicaciones de marketing en nuestro
            nombre. Los proveedores utilizan su Información para ejecutar,
            entregar o, a veces, mejorar los servicios que proporcionan. No
            compartimos información con proveedores para su uso con fines de
            marketing directo, ni para ningún otro fin que no figure en esta
            sección, sin su consentimiento. También compartimos cierta
            Información de nuestros jugadores (por ejemplo, datos de juego) con
            los socios externos y licenciatarios que crean aplicaciones y sitios
            web que benefician a nuestra comunidad de jugadores (por ejemplo,
            torneos, tablas de clasificación y herramientas de estadísticas de
            juego).
          </p>
          <p style={{marginLeft: "40.0px"}}>
            <b>3. Ley aplicable</b>
          </p>
          <p style={{marginLeft: "40.0px"}}>
            Divulgaremos su información de buena fe según lo exija la ley, lo
            que incluye, entre otras posibilidades, la divulgación a agencias
            policiales u otros funcionarios del gobierno en relación con
            investigaciones por fraude, infracciones de la propiedad intelectual
            u otras actividades ilegales o actividades que puedan implicar una
            responsabilidad legal para usted o para nosotros.
          </p>
          <p style={{marginLeft: "40.0px"}}>
            Esto puede incluir responder a solicitudes legales de jurisdicciones
            por fuera de los Estados Unidos cuando creamos de buena fe que una
            respuesta es requerida por ley en esa jurisdicción, afecta a los
            usuarios en esa jurisdicción y es coherente con los estándares
            reconocidos internacionalmente.
          </p>
          <p style={{marginLeft: "40.0px"}}>
            <b>4. Derechos legales</b>
          </p>
          <p style={{marginLeft: "40.0px"}}>
            Divulgaremos su Información cuando sea necesario con el fin de
            ejercer, establecer o defender nuestros derechos legales. Por
            ejemplo, revisaremos sus juegos, sus comunicaciones y otra
            información de su cuenta para investigar denuncias de trampa, hackeo
            o cualquier otro incumplimiento o presunto incumplimiento de las
            Condiciones de uso aplicables o de esta Política de privacidad y
            divulgaremos su información personal de forma pública, incluidas sus
            comunicaciones, su nombre de usuario o su ID de usuario. .
          </p>
          <p style={{marginLeft: "40.0px"}}>
            <b>5. Protección de terceros</b>
          </p>
          <p style={{marginLeft: "40.0px"}}>
            Divulgamos su Información a terceros cuando consideremos que es
            necesario para proteger los derechos, la propiedad o la seguridad de
            otra persona. Por ejemplo, divulgamos Información relacionada con
            una cuenta en línea si creemos de buena fe que el usuario de esa
            cuenta la está utilizando de manera perjudicial para otras personas
            (por ejemplo, comunicándose de manera inapropiada con menores de
            edad).
          </p>
          <p style={{marginLeft: "40.0px"}}>
            <b>6. Venta de nuestra empresa o nuestros activos</b>
          </p>
          <p style={{marginLeft: "40.0px"}}>
            Por separado, en el caso de una fusión, adquisición, reorganización,
            quiebra u otro evento similar, la información de los clientes de
            Activision, incluida su Información y sus comunicaciones, podría
            transferirse a un sucesor o cesionario.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc7"></a>7. Seguridad
            </b>
          </p>
          <p>
            <b>&nbsp;</b>
          </p>
          <p>
            Como se detalla a continuación, Activision adopta una serie de
            medidas de seguridad para proteger su Información. Sin embargo, no
            es posible garantizar una seguridad total para usuarios en línea y
            sin conexión, por lo que siempre debe tener cuidado al momento de
            compartir su información en línea.
          </p>
          <p>
            Activision adopta una serie de medidas de seguridad para proteger su
            información personal y mantener su confidencialidad (a menos que sea
            de carácter no confidencial; por ejemplo, información disponible
            públicamente como los contenidos generados por el propio usuario,
            las tablas de clasificación y las puntuaciones, etc.). También
            tomamos medidas para garantizar que la información personal
            recopilada esté protegida contra su uso indebido y alteración.
            Además, solicitamos a los proveedores que tratan su información
            personal en nuestro nombre que tomen una serie de medidas de
            seguridad diseñadas para proteger su información personal. Sin
            embargo, por su naturaleza, Internet no es un entorno seguro y la
            naturaleza de los riesgos de seguridad está en constante evolución,
            al igual que los estándares técnicos y organizacionales de la
            industria relacionados con la gestión de dichos riesgos. Por lo
            tanto, no podemos garantizar la seguridad total de la información
            personal recopilada, almacenada o utilizada por nosotros o por
            nuestros proveedores.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc8"></a>8. Información sobre su cuenta y su período de
              retención
            </b>
          </p>
          <p>
            Tal como se establece en más detalle a continuación, puede
            visualizar, corregir, actualizar o solicitar la eliminación de su
            información personal de cualquiera de sus cuentas de Activision en
            cualquier momento.
          </p>
          <p>
            Si por algún motivo desea visualizar, corregir o actualizar la
            información personal recopilada sobre usted, simplemente acceda a su
            cuenta de Activision a través de&nbsp;
            <a href="https://www.activision.com/mx/es/">
              https://www.activision.com/
            </a>
            &nbsp;u otro producto o servicio, según corresponda, y edite su
            información personal. Necesitará su contraseña para acceder su
            cuenta personal.
          </p>
          <p>
            Si tuviera alguna inquietud con respecto a la forma en que
            utilizamos su información personal, o si deseara corregirla o
            solicitar que eliminemos esa información personal, podrá enviarnos
            una solicitud utilizando la información de contacto en la
            sección&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc9">
              <b>Contacto</b>
            </a>
            &nbsp;a continuación.
          </p>
          <p>
            <b>Período de retención</b>
          </p>
          <p>
            Eliminamos la información personal que tratamos para los fines del
            cumplimiento del contrato o de acuerdo con su consentimiento en caso
            de que usted finalice su contrato con nosotros, desactive su cuenta
            de Activision, revoque su consentimiento o solicite que eliminemos
            su información personal de acuerdo con esta Política de privacidad.
            Como excepción, no eliminaremos su información personal si seguimos
            teniendo un interés legítimo en utilizarla. Por ejemplo, podemos
            conservar su Información para resolver disputas, hacer cumplir
            nuestras Condiciones de uso u otros acuerdos del usuario, o para
            cumplir con requisitos legales. En tales casos, se bloqueará el uso
            de su información personal para otros propósitos. En cualquier caso,
            no conservaremos ni utilizaremos su información personal por más
            tiempo del que sea necesario para los fines descritos en esta
            Política de privacidad. Por razones técnicas, las copias residuales
            de la Información eliminada de su cuenta o de las Propiedades
            podrían permanecer durante aproximadamente un mes en nuestras copias
            de seguridad.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc9"></a>9. Contacto
            </b>
          </p>
          <p>
            Para comunicarse con nosotros, puede enviarnos un correo electrónico
            a <a href="mailto:privacy@activision.com">privacy@activision.com</a>
            , o escribirnos a esta dirección: Activision Publishing, Inc., 2701
            Olympic Boulevard Building B, Santa Monica, CA 90404, ATTN: Privacy
            Team/Privacy Policy, o llamar al equipo de Privacidad o al
            Departamento de Política de Privacidad al +1&nbsp;310&nbsp;255 2000.
            Los visitantes del EEE y del Reino&nbsp;Unido también pueden
            comunicarse con nuestro director de Protección de Datos por correo
            electrónico a{" "}
            <a href="mailto:DPO@activision.com">DPO@activision.com</a>.
          </p>
          <p>
            También puede comunicarse con el Programa de certificación de
            privacidad de ESRB si tiene alguna pregunta o queja que no se haya
            resuelto de manera satisfactoria. Consulte la sección sobre el&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc2">
              <b>Programa de certificación de privacidad de ESRB</b>
            </a>
            &nbsp;al principio de esta Política de privacidad para obtener más
            información.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc10"></a>10. Usuarios en EE.&nbsp;UU.
            </b>
          </p>
          <p>
            Además de la información proporcionada a lo largo de esta política
            de privacidad, las leyes de privacidad estatales de
            Estados&nbsp;Unidos exigen que divulguemos a los consumidores de
            esos Estados información adicional sobre el tratamiento de su
            información personal. A continuación, describimos los fines para los
            que utilizamos y divulgamos la información personal y, para cada
            fin, las categorías de información personal que utilizamos y
            divulgamos, y las categorías de terceros a quienes divulgamos la
            información personal.
          </p>
          <ul>
            <li>
              <b>Funcionalidad del servicio</b>: Utilizamos cierta información
              personal para suministrarle nuestras Propiedades, productos y
              servicios, incluidos los pasos necesarios para crear una cuenta,
              suscribir un contrato de venta o de servicios, facilitar las
              compras o procesar los pagos, gestionar los pedidos, enviar
              comunicaciones de servicio, proporcionar funciones de atención al
              cliente y realizar operaciones comerciales generales, como
              contabilidad, mantenimiento de registros y auditorías, analizar
              nuestro rendimiento, cumplir nuestras obligaciones legales y
              realizar contrataciones.&nbsp;
            </li>
            <li>
              <b>Mejora del servicio</b>: Para mejorar y desarrollar nuestras
              Propiedades, incluso para verificar y mantener la calidad de
              nuestros servicios, desarrollar nuevos productos y servicios, y
              comprender cómo se utilizan nuestras Propiedades, nuestra base de
              clientes y tendencias de compra, y la eficacia de nuestro
              marketing.&nbsp;
            </li>
            <li>
              <b>Personalización</b>: Para ofrecerle recomendaciones y adaptar
              las Propiedades a sus preferencias.&nbsp;
            </li>
          </ul>
          <p>
            La información personal que recopilamos y utilizamos para la
            funcionalidad del servicio, la mejora del servicio y los fines de
            personalización incluye lo siguiente:
          </p>
          <ul>
            <li>
              <ul>
                <li>
                  <i>Información personal proporcionada por usted:</i>
                  <ul>
                    <li>
                      Información de contacto, incluido el nombre, el nombre de
                      usuario, la fecha de nacimiento, la dirección de correo
                      electrónico y el número de teléfono
                    </li>
                    <li>
                      Información demográfica: incluido su sexo, fecha de
                      nacimiento y país
                    </li>
                    <li>
                      Información de pago recopilada por nuestros procesadores
                      de pago externos para completar una compra
                    </li>
                    <li>
                      Información que proporciona cuando se registra en una
                      Propiedad, incluso cuando vincula una cuenta de terceros
                      (por ejemplo, XBOX Live, PlayStation Network, Steam y
                      Battle.net) a su cuenta de Activision
                    </li>
                    <li>Información audiovisual</li>
                    <li>
                      Información contenida en sus comunicaciones con nosotros,
                      incluso cuando se comunica con el servicio de atención al
                      cliente
                    </li>
                    <li>
                      Cualquier información que proporcione a través de la
                      interacción con nuestras Propiedades (tenga en cuenta que
                      algunos comentarios o información también pueden ser
                      visibles para otros usuarios de nuestras Propiedades)
                    </li>
                    <li>
                      Información de servicio de atención al cliente, como
                      cualquier problema que plantee y su resolución
                    </li>
                    <li>
                      Información sobre sus intereses y el uso de diversos
                      productos, servicios de programas y preferencias de
                      marketing
                    </li>
                    <li>Datos de redes sociales</li>
                  </ul>
                </li>
                <li>
                  <i>Información personal recopilada automáticamente:</i>
                  <ul>
                    <li>
                      Sitios web visitados antes y después de utilizar una
                      Propiedad
                    </li>
                    <li>Tipo e idioma del navegador</li>
                    <li>Dirección IP</li>
                    <li>Información de hardware y software</li>
                    <li>Datos de juego</li>
                    <li>Comunicaciones</li>
                    <li>Datos de uso</li>
                    <li>Historiales de compra</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Divulgamos esta información personal a las siguientes entidades:
          </p>
          <ul>
            <li>
              Varias empresas del grupo Activision Blizzard, disponibles{" "}
              <a href="https://www.activision.com/mx/es/legal/entities">aquí</a>
              , que pueden utilizar la información personal para sus propios
              fines, incluido el marketing
            </li>
            <li>
              Proveedores de servicios, vendedores y socios comerciales,
              incluidos proveedores de torneos, empresas de facturación,
              servicios de atención al cliente, consultorías, proveedores de
              tecnologías de la información, proveedores de ciberseguridad,
              procesadores de pagos, empresas de contabilidad y empresas de
              auditoría
            </li>
            <li>
              Socios y licenciatarios que le suministran bienes o servicios que
              ha solicitado o que crean aplicaciones y sitios web en beneficio
              de nuestra comunidad de jugadores
            </li>
          </ul>
          <p>
            Activision también muestra públicamente cierta información personal
            acerca de usted, como datos de cuentas de terceros y datos de juego,
            en sus Propiedades o en propiedades gestionadas por socios externos
            o licenciatarios.&nbsp; Por ejemplo, su nombre de usuario de
            PlayStation se mostrará en las tablas de clasificación si es un
            jugador destacado de un juego de Activision, independientemente de
            que tenga una cuenta en Activision.&nbsp; Si ha sincronizado una
            cuenta de terceros con su cuenta de Activision, nosotros o nuestros
            socios externos o licenciatarios podríamos poner su nombre de
            usuario a disposición de otros usuarios si no ha desactivado esta
            función.&nbsp;
          </p>
          <ul>
            <li>
              <b>Sorteos, concursos y promociones:</b>&nbsp;Cuando Activision
              organiza concursos, sorteos o promociones en nuestras Propiedades,
              recopilamos cierta información personal de los participantes para
              inscribirlos en el evento y entregar los premios ganados, y
              combinamos esa información personal con otra información personal
              que hayamos recopilado sobre usted y utilizamos dicha información
              combinada para los demás fines indicados en esta Política de
              privacidad, como crear su cuenta o participar en actividades de
              marketing.
            </li>
          </ul>
          <p>
            La información personal que recopilamos y utilizamos para este
            propósito incluye lo siguiente:
          </p>
          <ul>
            <li>
              Información personal proporcionada por usted:
              <ul>
                <li>
                  Información de contacto, incluidos el nombre, la dirección, el
                  código postal, la edad y/o la fecha de nacimiento, la
                  dirección de correo electrónico, el número de teléfono y
                  cualquier otra información que nos envíe
                </li>
                <li>
                  Información que facilite para reclamar los premios que gane
                  &nbsp;
                </li>
              </ul>
            </li>
            <li>
              <i>
                Divulgamos esta información personal a las siguientes entidades
              </i>
              :
              <ul>
                <li>
                  Varias empresas del grupo Activision Blizzard,
                  disponibles&nbsp;
                  <a href="https://www.activision.com/mx/es/legal/entities">
                    aquí
                  </a>
                  , que pueden utilizar la información personal para sus propios
                  fines de marketing.
                </li>
                <li>
                  Proveedores de servicios, vendedores o socios comerciales,
                  como entidades que realizan encuestas o promociones en nuestro
                  nombre. En algunas circunstancias, como la divulgación a
                  socios comerciales para sus propios fines de marketing, solo
                  la hacemos con su consentimiento.
                </li>
              </ul>
            </li>
            <li>
              <b>Publicidad y marketing</b>: Para enviarle comunicaciones de
              marketing y boletines informativos, personalizar los anuncios que
              ve en nuestras Propiedades y las propiedades de terceros en línea,
              y medir la eficacia de nuestra publicidad. Podemos enviar el
              marketing y los boletines por correo electrónico, notificaciones
              dentro de la aplicación o SMS en los países que cumplan los
              requisitos.&nbsp;
            </li>
          </ul>
          <p>
            La información personal que recopilamos y utilizamos para este
            propósito incluye lo siguiente:
          </p>
          <ul>
            <li>
              &nbsp;<i>Información personal proporcionada por usted:</i>
              <ul>
                <li>
                  Información de contacto, incluido el nombre, el nombre de
                  usuario, la fecha de nacimiento, la dirección de correo
                  electrónico y el número de teléfono
                </li>
                <li>
                  Información demográfica: incluido su sexo, fecha de nacimiento
                  y país
                </li>
                <li>
                  Información que proporciona cuando se registra en una
                  Propiedad, incluso cuando vincula una cuenta de terceros (por
                  ejemplo, XBOX Live, PlayStation Network, Steam y Battle.net) a
                  su cuenta de Activision
                </li>
                <li>
                  Cualquier información que proporcione a través de la
                  interacción con nuestras Propiedades (tenga en cuenta que
                  algunos comentarios o información también pueden ser visibles
                  para otros usuarios de nuestras Propiedades)
                </li>
                <li>
                  Información sobre sus intereses y el uso de diversos
                  productos, programas y servicios
                </li>
                <li>Preferencias de marketing</li>
              </ul>
            </li>
            <li>
              <i>Información personal recopilada automáticamente:</i>
              <ul>
                <li>
                  Sitios web visitados antes y después de utilizar una Propiedad
                </li>
                <li>Tipo de navegador y configuración de idioma/navegador</li>
                <li>Dirección IP</li>
                <li>Información de hardware y software</li>
                <li>Datos de juego</li>
                <li>Comunicaciones</li>
                <li>Datos de uso</li>
                <li>Historiales de compra</li>
                <li>
                  Identificadores de publicidad móvil, identificadores no
                  personales y otra información de su dispositivo móvil
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Divulgamos esta información personal a las siguientes entidades:
          </p>
          <ul>
            <li>
              Varias empresas del grupo Activision Blizzard, disponibles&nbsp;
              <a href="https://www.activision.com/mx/es/legal/entities">aquí</a>
              , que pueden utilizar la información personal para sus propios
              fines, incluso el marketing
            </li>
            <li>
              Proveedores de servicio, vendedores y socios comerciales, como los
              socios de publicidad en línea, incluidos los socios que utilizan
              cookies para personalizar, refocalizar y medir la eficacia de la
              publicidad, incluso en nuestros juegos móviles
              <ul>
                <li>
                  Estos socios podrían combinar esta información personal con la
                  información que recopilan sobre usted cuando utiliza sus
                  servicios (o los sitios web y servicios de terceros), a fin de
                  proporcionarle anuncios más relevantes o para mejorar la
                  precisión de sus sistemas de focalización y medición.
                </li>
              </ul>
            </li>
            <li>
              Plataformas de redes sociales
              <ul>
                <li>
                  Si interactúa con las Propiedades en plataformas de medios
                  sociales (o complementos y aplicaciones de redes sociales), (
                  <b>“Redes sociales”</b>), reconoce que accedemos a su
                  información personal, como su nombre, su nombre de usuario o
                  su imagen de perfil, únicamente a través de la configuración
                  de privacidad de sus Redes sociales, y que la usamos para
                  personalizar contenido, focalizar los anuncios de marketing y
                  mejorar y ajustar la experiencia del usuario en relación con
                  las Propiedades de Activision, además de (1) proporcionarle
                  contenido exclusivo; (2) personalizar su experiencia en línea,
                  tanto dentro como fuera de nuestras Propiedades; y (3)
                  contactarlo según las preferencias de marketing aplicables a
                  través de Redes sociales, incluso mediante el suministro de
                  anuncios de marketing personalizado o en forma directa
                  mediante el envío de noticias, ofertas especiales y premios.
                  Cuando comparta información públicamente a través de las
                  Propiedades o en Redes sociales, será visible para otros
                  usuarios de estos sitios y no podremos impedir el uso
                  posterior de esa información por parte de terceros.&nbsp; Para
                  obtener más información sobre cómo sus Redes sociales utilizan
                  y protegen su información, consulte sus políticas de
                  privacidad y condiciones de uso.&nbsp;
                </li>
              </ul>
            </li>
            <li>
              Socios comerciales, cuando usted nos da su consentimiento para
              divulgarles su información personal.
            </li>
            <li>
              <b>Seguridad y juego justo</b>: Para proteger y asegurar nuestras
              Propiedades, activos, redes y operaciones comerciales; y para
              detectar, investigar y prevenir actividades que puedan infringir
              nuestras políticas o ser fraudulentas o ilegales; o cuando sea
              necesario para proteger nuestra propiedad o derechos, o la
              seguridad de nuestros empleados, clientes u otras personas.&nbsp;
              Para proporcionar una experiencia de juego justa a todos los
              jugadores, Activision utiliza tecnologías antifraude, antitrampa y
              antitoxicidad para prevenir las trampas y el mal comportamiento en
              nuestros juegos.&nbsp;
            </li>
          </ul>
          <p>
            La información personal que recopilamos y utilizamos para este
            propósito incluye lo siguiente:
          </p>
          <ul>
            <li>
              <i>Información personal proporcionada por usted:</i>
              <ul>
                <li>
                  Información de contacto, incluido el nombre, el nombre de
                  usuario, la fecha de nacimiento, la dirección de correo
                  electrónico y el número de teléfono
                </li>
                <li>
                  Información que proporciona cuando se registra en una
                  Propiedad, incluso cuando vincula una cuenta de terceros (por
                  ejemplo, XBOX Live, PlayStation Network, Steam y Battle.net) a
                  su cuenta de Activision
                </li>
                <li>
                  Cualquier información que proporcione a través de la
                  interacción con nuestras Propiedades (tenga en cuenta que
                  algunos comentarios o información también pueden ser visibles
                  para otros usuarios de nuestras Propiedades)
                </li>
              </ul>
            </li>
            <li>
              <i>
                Información personal recopilada automáticamente, incluso
                mediante el monitoreo y la grabación en su dispositivo:
              </i>
              <ul>
                <li>
                  Sitios web visitados antes y después de utilizar una Propiedad
                </li>
                <li>Tipo e idioma del navegador</li>
                <li>Dirección IP</li>
                <li>Información de hardware y software</li>
                <li>Datos de juego</li>
                <li>
                  Comunicaciones (incluidas, entre otras, las de chat, texto o
                  voz)
                </li>
                <li>Datos de uso</li>
                <li>
                  Identificadores de publicidad móvil, identificadores no
                  personales y otra información de su dispositivo móvil
                </li>
                <li>
                  Actividades en su dispositivo, incluida la información sobre
                  los programas que se ejecutan junto con el juego, tal y como
                  se especifica en las Condiciones de uso o en el Contrato de
                  licencia de usuario final aplicables
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Podemos divulgar esta información personal a las siguientes
            entidades:
          </p>
          <ul>
            <li>
              Varias empresas del grupo Activision Blizzard, disponibles&nbsp;
              <a href="https://www.activision.com/mx/es/legal/entities">aquí</a>
              , que pueden utilizar la información personal para sus propios
              fines, incluido el marketing.
            </li>
            <li>
              Proveedores de servicios, vendedores y socios comerciales, como
              proveedores de plataformas, proveedores de ciberseguridad,
              proveedores de torneos y proveedores de tecnologías de la
              información
            </li>
            <li>
              Otras entidades cuando consideremos que sea necesario para
              proteger los derechos, la propiedad o la seguridad de cualquier
              persona
            </li>
            <li>Organismos reguladores o encargados de hacer cumplir la ley</li>
            <li>
              <b>Cumplimiento legal</b>: Para cumplir con procesos legales,
              tales como mandatos judiciales, citaciones y órdenes judiciales;
              para responder a solicitudes legales de cumplimiento de la ley o
              reglamentarias, como cuando creemos de buena fe que debemos
              hacerlo por ley, lo que incluye, entre otros, la divulgación a las
              agencias policiales u otros funcionarios del Gobierno en relación
              con una investigación de fraude, infracciones de propiedad
              intelectual u otra actividad ilegal, o que pueda exponerlo a usted
              o a nosotros a responsabilidad legal; para ejercer, establecer o
              defender nuestros derechos legales; para proteger los intereses
              vitales de cualquier persona; y para cumplir con los requisitos
              legales aplicables.&nbsp; Dicha información personal incluye la
              siguiente información:
              <ul>
                <li>
                  Cualquier información solicitada a través de un proceso legal
                  o que creamos de buena fe que es necesaria para responder a
                  solicitudes legales reglamentarias o de cumplimiento de la ley
                  para los fines enumerados anteriormente.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Podemos divulgar esta información personal a las siguientes
            entidades:
          </p>
          <ul>
            <li>
              Organismos reguladores o encargados de hacer cumplir la ley,
              incluidas las jurisdicciones por fuera de Estados&nbsp;Unidos
              cuando creamos de buena fe que una respuesta es requerida por ley
              en esa jurisdicción, afecta a los usuarios en esa jurisdicción y
              es coherente con los estándares reconocidos internacionalmente.
            </li>
            <li>Nuestros asesores o consultores legales.</li>
            <li>
              <b>Cambio corporativo:</b>&nbsp;Podemos divulgar cualquier
              información personal que hayamos recopilado sobre usted en
              relación con la venta de nuestro negocio o activos en caso de
              fusión, adquisición, reorganización, quiebra u otro evento
              similar.
            </li>
          </ul>
          <p>
            Activision no es responsable de las prácticas de privacidad de las
            empresas del grupo Activision Blizzard, y el uso de su información
            personal por parte de las empresas del grupo Activision Blizzard se
            regirá por las políticas de privacidad de cada empresa, las cuales
            podrá encontrar en sus sitios web.
          </p>
          <p>
            <a id="toc10a"></a>
            <b>a. Sus derechos de privacidad en EE.&nbsp;UU.</b>
          </p>
          <p>
            Los residentes de algunos Estados tienen ciertos derechos en
            relación con su información personal. A continuación, describimos
            los derechos que pueden estar disponibles para usted, según su
            Estado de residencia.
          </p>
          <p>
            <b>Derecho a solicitar el acceso a su información personal</b>
          </p>
          <p>
            Puede tener derecho a solicitar, hasta dos veces en un período de
            12&nbsp;meses, acceso a la información personal que hemos recopilado
            sobre usted y a la información relacionada con la fuente de dicha
            información personal, los fines para los que la recopilamos, y los
            terceros y proveedores de servicios a los que la vendemos,
            compartimos o divulgamos. Tenga en cuenta que cierta información
            puede estar exenta de estas solicitudes en virtud de la legislación.
          </p>
          <p>
            <b>
              Derecho a solicitar la rectificación de su información personal
            </b>
          </p>
          <p>
            Puede tener derecho a solicitar que, en determinadas circunstancias,
            corrijamos la información personal que hemos recopilado sobre usted.
            Cierta información puede estar exenta de estas solicitudes en virtud
            de la legislación.
          </p>
          <p>
            <b>Derecho a solicitar la eliminación de su información personal</b>
          </p>
          <p>
            También puede tener derecho a solicitar que eliminemos la
            información personal que hayamos recopilado de usted o sobre usted.
            Cierta información personal puede estar exenta de estas solicitudes
            en virtud de la legislación.&nbsp; Por ejemplo, necesitamos cierto
            tipo de información personal para suministrarle nuestras
            Propiedades.&nbsp; Si solicita que la eliminemos, es posible que no
            pueda seguir usando o accediendo a nuestras Propiedades.
          </p>
          <p>
            <b>Limitar el uso de su información personal confidencial</b>
          </p>
          <p>
            Los residentes en California tienen derecho a limitar el uso que
            hacemos de su información personal confidencial si la utilizamos
            para inferir características sobre ellos. Actualmente, no utilizamos
            información personal confidencial para tales fines. En algunos
            Estados, se nos puede exigir que obtengamos su consentimiento antes
            de recopilar su información personal confidencial.
          </p>
          <p>
            <b>
              Venta y uso compartido de información personal; publicidad
              focalizada
            </b>
          </p>
          <p>
            De acuerdo con la legislación de algunos Estados, los consumidores
            tienen derecho a optar por que no se vendan o compartan su
            información personal con terceros para publicidad focalizada
            (también conocida como publicidad conductual en contextos cruzados o
            publicidad basada en intereses). En los estados aplicables,
            Activision automáticamente excluye a los usuarios que se sabe que
            son menores, según el estado, de recibir publicidad dirigida.
          </p>
          <p>
            Podemos vender o compartir cierta información a terceros, incluidos
            nuestros socios comerciales y socios publicitarios.
          </p>
          <p>
            Compartimos cierta información con terceros que trabajan en nuestro
            nombre para los fines comerciales descritos anteriormente, así como
            con varias empresas del grupo Activision Blizzard.
          </p>
          <p>
            También permitimos que empresas anunciantes externas recopilen
            Información acerca de su actividad en nuestros sitios web y nuestras
            aplicaciones; por ejemplo, a través de cookies, identificadores de
            publicidad móvil, píxeles, balizas web y complementos de redes
            sociales.&nbsp; Estas empresas anunciantes utilizan la Información
            que recopilan con el fin de ayudarnos a ofrecer anuncios más
            relevantes y para otros fines descritos en nuestra Política de
            privacidad.&nbsp; Puede controlar el uso compartido de su
            información personal para publicidad focalizada a través de nuestros
            sitios web y aplicaciones de las siguientes maneras:
          </p>
          <ul>
            <li>
              Para configurar los controles de las cookies y deshabilitar las
              cookies publicitarias, incluidas las cookies publicitarias de
              terceros, haga clic{" "}
              <a href="https://www.activision.com/mx/es/legal/privacy-policy#cookiePopup">
                aquí
              </a>
              .&nbsp;
            </li>
            <li>
              También puede configurar controles de cookies a través de una
              variedad de ajustes de su navegador y emplear exclusiones
              voluntarias válidas para toda la industria a fin de controlar el
              uso de cookies publicitarias basadas en intereses del
              usuario.&nbsp;
            </li>
            <li>
              También puede excluirse a través de la página de configuración de
              las aplicaciones móviles de Activision que comparten sus datos
              para estos fines.&nbsp; Puede encontrar información adicional en
              la sección&nbsp;
              <a href="https://www.activision.com/mx/es/legal/privacy-policy#mobileAdvertising">
                <b>Publicidad móvil</b>
              </a>
              &nbsp;anterior y en nuestra&nbsp;
              <a href="https://www.activision.com/mx/es/legal/cookie-policy">
                <b>Política de cookies</b>
              </a>
              <b>.</b>
            </li>
          </ul>
          <p>
            La información personal recopilada a través de estos métodos está
            relacionada con su navegador o su dispositivo; por lo tanto, si
            quiere autoexcluirse de la recopilación de esta información, tendrá
            que desactivar las cookies o los rastreadores como hemos indicado.
            Dado que su preferencia de exclusión se almacena en una cookie, si
            restablece su id. de publicidad o elimina sus cookies, no
            reconoceremos su dispositivo ni sus opciones, por lo que deberá
            volver a excluirse. También puede deshabilitar las cookies no
            publicitarias a través de la configuración de su navegador o su
            dispositivo.
          </p>
          <p>
            En los Estados aplicables, cuando sea necesario, Activision reconoce
            la configuración No rastrear y el Control de privacidad global.
          </p>
          <p>
            Información personal recopilada a través de cuentas de
            Activision:&nbsp;Además de las exclusiones voluntarias relacionadas
            con la publicidad mencionadas anteriormente, apoyamos las leyes
            estatales aplicables. Para ello, permitimos a los residentes
            excluirse voluntariamente de la venta o el intercambio de su
            información personal para publicidad focalizada mediante un
            clic&nbsp;<a href="https://support.activision.com/privacy">aquí</a>.
            Iniciar sesión con una cuenta nos ayuda a procesar su solicitud.
            También puede enviar una solicitud para excluirse voluntariamente de
            las comunicaciones de ventas o de uso compartido de la información
            enviándonos un correo a{" "}
            <a href="mailto:privacyrequests@activision.com">
              privacyrequests@activision.com
            </a>
            .
          </p>
          <p>
            <b>
              Cómo ejercer sus derechos de acceso, rectificación y eliminación
            </b>
          </p>
          <p>
            Puede ejercer los derechos de privacidad que le correspondan. Para
            ello, envíe su solicitud&nbsp;
            <a href="https://support.activision.com/privacy">aquí</a>&nbsp;o
            envíe un correo electrónico a&nbsp;
            <a href="mailto:ccparequests@activision.com">
              privacyrequests@activision.com
            </a>
            . Para ejercer su derecho de rectificación, actualice la información
            de su cuenta directamente o envíe un correo electrónico a
            privacyrequests@activision.com.
          </p>
          <p>
            Por motivos de seguridad, verificaremos su identidad y podremos
            solicitarle información para hacerlo cuando solicite ejercer sus
            derechos de privacidad. Si dispone de una cuenta en línea que
            utiliza para interactuar con Activision, el inicio de sesión en su
            cuenta servirá para verificar su identidad y solicitud.&nbsp;
            Podríamos solicitar información adicional si creemos que está
            comprometida la seguridad de su cuenta. Si no dispone de una cuenta
            con nosotros<i>&nbsp;</i>o si tenemos motivos para sospechar que
            está comprometida la seguridad de su cuenta, podemos solicitarle
            información adicional que deberá coincidir con la de nuestros
            registros existentes a fin de verificar su identidad, según la
            naturaleza de la solicitud y la sensibilidad de la información
            solicitada.
          </p>
          <p>
            Algunos Estados le permiten designar a un agente con el fin de que
            realice las solicitudes para ejercer sus derechos descritos
            anteriormente. Tomaremos medidas tanto para verificar la identidad
            de la persona que desea ejercer los derechos aquí dispuestos como
            para verificar que su agente (incluido uno de los padres, según
            corresponda) haya sido autorizado para presentar una solicitud en su
            nombre, debiendo proporcionarnos para este fin una autorización
            escrita firmada o la copia de un poder notarial.
          </p>
          <p>
            Una vez que hayamos verificado su identidad (y la de su agente
            autorizado, si corresponde), responderemos debidamente a su
            solicitud. Si no podemos atender su solicitud, le informaremos de
            los motivos por los que no hemos podido hacerlo, tal como exige la
            legislación aplicable.
          </p>
          <p>
            <b>Elaboración de perfiles</b>
          </p>
          <p>
            No “elaboramos perfiles” para tomar decisiones que produzcan efectos
            jurídicos o de importancia similar.
          </p>
          <p>
            <b>Derecho a la no discriminación</b>
          </p>
          <p>
            No denegaremos, cobraremos precios diferentes ni ofreceremos un
            nivel de calidad diferente de los bienes o servicios por el hecho de
            que haya decidido ejercer estos derechos, salvo que lo permita la
            legislación aplicable.
          </p>
          <p>
            <b>Apelaciones</b>
          </p>
          <p>
            Algunas leyes estatales permiten a los residentes que no estén
            satisfechos con nuestra respuesta a sus solicitudes apelar nuestra
            decisión. Para ello, deben comunicarse con nosotros, tal como se
            describe en la notificación escrita que le facilitaremos.
          </p>
          <p>
            <b>
              <a id="toc10b"></a>b. Información adicional sobre la privacidad
              para residentes de California
            </b>
          </p>
          <p>
            <b>
              Aviso de prácticas de privacidad para residentes de California
            </b>
          </p>
          <p>
            Según cómo interactúe con nosotros, Activision puede recopilar sobre
            usted las siguientes categorías de información personal. Con el fin
            de obtener información sobre los fines para los que utilizamos y
            divulgamos información, y otras posibles divulgaciones de
            información personal, consulte la sección&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc10">
              <b>Usuarios en EE.&nbsp;UU.</b>
            </a>
            &nbsp;anterior. Como se mencionó anteriormente, podemos compartir
            información personal entre varias empresas del grupo Activision
            Blizzard para la publicidad conductual en contextos cruzados.
          </p>
          <ul>
            <li>
              Los identificadores, recopilados a partir de usted, nuestras
              páginas de redes sociales o proveedores de servicios de
              suscripción de terceros, pueden ser divulgados a nuestros
              proveedores de servicios y pueden ser vendidos o compartidos con
              socios comerciales.
            </li>
            <li>
              La información financiera, recopilada sobre usted, podrá ser
              divulgada a nuestros proveedores de servicios. No vendemos ni
              compartimos información financiera.
            </li>
            <li>
              Las clasificaciones protegidas y otros datos confidenciales,
              recopilados sobre usted, pueden ser divulgados a nuestros
              proveedores de servicios. No vendemos ni compartimos
              clasificaciones protegidas ni otros datos confidenciales.
            </li>
            <li>
              La información comercial, recopilada sobre usted, puede ser
              compartida con nuestros proveedores de servicios. No vendemos ni
              compartimos información comercial.
            </li>
            <li>
              La información de geolocalización, recopilada a partir de usted y
              nuestros socios de publicidad y análisis, puede compartirse con
              nuestros proveedores de servicios. Podemos vender o compartir
              información de ubicación aproximada a nuestros socios anunciantes;
              no vendemos ni compartimos información precisa de geolocalización.
            </li>
            <li>
              La información sobre su actividad en Internet o en redes
              electrónicas, recopilada a partir de usted y nuestros socios de
              análisis y publicidad, puede compartirse con nuestros proveedores
              de servicios y venderse o compartirse a nuestros socios
              anunciantes.
            </li>
            <li>
              La información de audio, electrónica, visual, térmica, olfativa o
              similar que se obtenga de usted podrá compartirse con nuestros
              proveedores de servicios. No vendemos ni compartimos dicha
              información.
            </li>
            <li>
              Las inferencias realizadas sobre usted, recopiladas de usted y de
              nuestros socios anunciantes y de análisis, pueden ser compartidas
              con nuestros proveedores de servicios. Podemos vender o compartir
              dicha información con nuestros socios anunciantes.
            </li>
            <li>
              El contenido de las comunicaciones, recopilado sobre usted, puede
              ser compartido con nuestros proveedores de servicios. No vendemos
              ni compartimos contenido de comunicaciones.
            </li>
            <li>
              La información de los contactos que nos facilite podrá ser
              compartida con nuestros proveedores de servicios. No vendemos ni
              compartimos dicha información.
            </li>
          </ul>
          <p>
            Determinamos el período de retención para cada una de las categorías
            de información personal enumeradas anteriormente en función de (1)
            el tiempo que necesitamos retener la información a fin de lograr el
            objetivo empresarial o comercial para el que se obtuvo, (2)
            cualquier requisito legal o reglamentario aplicable a dicha
            información, (3) las necesidades operativas internas y (4) cualquier
            necesidad de la información basada en cualquier investigación o
            litigio real o previsto.&nbsp;
          </p>
          <p>
            Los residentes en California tienen derecho a optar por no vender o
            compartir su información personal, como se explica&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#SaleandSharingPersonal">
              aquí
            </a>
            .
          </p>
          <p>
            La información de notificación exigida por el Reglamento de la Ley
            de Privacidad del Consumidor de California, art. 7102, está
            disponible&nbsp;
            <a href="https://www.activision.com/mx/es/legal/ccpa-report">
              aquí
            </a>
            .
          </p>
          <p>
            Es posible que necesitemos recopilar su información personal para
            ofrecerle los beneficios y las recompensas que solicita.&nbsp; Por
            ejemplo, podemos necesitar su dirección de correo electrónico para
            verificar su cuenta y entregarle un artículo en el juego. Si le
            ofrecemos la posibilidad de participar en un programa de este tipo,
            su participación es opcional. Si decide participar, su participación
            estará sujeta a las condiciones aplicables y podrá retirarse en
            cualquier momento.&nbsp; Su información no tiene valor monetario
            real ni su equivalente.
          </p>
          <p>
            <b>Ley de privacidad (Shine the Light) de California</b>
          </p>
          <p>
            Desde 2005, la sección 1798.83 del Código Civil de California
            permite a nuestros clientes residentes en California solicitar
            cierta información sobre la divulgación de información personal que
            hacemos a terceros para sus fines de marketing directo. No
            compartimos con terceros la información personal de nuestros
            clientes para sus propios fines de marketing directo sin la
            autorización del cliente. Para consultas relativas a nuestra
            política de divulgación, envíe un correo electrónico a{" "}
            <a href="mailto:websitedisclosurepolicy@activision.com">
              privacy@activision.com
            </a>
            , o escríbanos a: Activision Publishing, Inc., 2701 Olympic
            Boulevard Building B, Santa Monica, CA 90404 USA., ATTN: Privacy
            Team/Privacy Policy.
          </p>
          <p>
            <b>Derechos de privacidad para usuarios menores en California</b>
          </p>
          <p>
            Desde el 1 de enero del 2015, la sección 22581 del Código Comercial
            y Profesional de California (Business and Professions Code) permite
            a los residentes de California menores de 18&nbsp;años visualizar,
            corregir o eliminar Información suministrada o divulgada
            públicamente por el menor, mediante el acceso a su cuenta de
            Activision en&nbsp;
            <a href="https://www.activision.com/mx/es/">
              https://www.activision.com/
            </a>
            &nbsp;o a través de otro producto o servicio, según corresponda,
            para que el menor pueda editar o eliminar su información. Necesitará
            su contraseña para acceder su cuenta personal. También se nos puede
            enviar un correo electrónico a{" "}
            <a href="mailto:privacy@activision.com">privacy@activision.com</a>{" "}
            para solicitar que eliminemos ciertos contenidos publicados.
            Alternativamente, se nos puede escribir a Activision Publishing,
            Inc., 2701 Olympic Boulevard Building B, Santa Monica, CA 90404
            USA., ATTN: Privacy Team/Privacy Policy.
          </p>
          <p>
            Con gusto revisaremos, actualizaremos o eliminaremos información o
            contenidos según corresponda. Podrían permanecer copias residuales
            de la Información o del contenido eliminado de su cuenta o de las
            Propiedades durante aproximadamente un mes en nuestras copias de
            seguridad. Podríamos conservar su Información para resolver
            disputas, hacer cumplir el acuerdo del usuario o para cumplir con
            requisitos legales; en tales casos, se bloqueará el uso de la
            información personal para otros propósitos.
          </p>
          <p>
            <b>
              <a id="toc10c"></a>c. Información sobre la privacidad para
              residentes de Nevada
            </b>
          </p>
          <p>
            Según la ley de Nevada, los residentes de Nevada que han comprado
            bienes o servicios nuestros pueden excluirse de la “venta” de
            “información cubierta” (según la definición de estos términos en la
            ley de Nevada) a personas que reciben una contraprestación económica
            por vender o autorizar el uso de aquella información a otros
            terceros.&nbsp; La “información cubierta” incluye nombre y apellido,
            dirección postal, dirección de correo electrónico y número de
            teléfono, o un identificador que permita contactar a una persona de
            manera personal o en línea.&nbsp; Tal como se ha descrito,
            compartimos su información con determinados terceros que creemos que
            pueden presentarle ofertas y promociones de productos y servicios de
            su interés y de otras formas aquí expuestas.&nbsp; No consideramos
            que este tipo de divulgación de información se pueda calificar como
            una venta según la ley de Nevada. No obstante, si usted es residente
            de Nevada y ha comprado bienes o servicios nuestros, puede enviar
            una solicitud para que conste su preferencia de exclusión enviando
            un correo electrónico a&nbsp;
            <a href="mailto:individualrights@activision.com">
              individualrights@activision.com
            </a>
            .&nbsp;&nbsp; Tenga en cuenta que tomaremos medidas razonables para
            verificar su identidad y la autenticidad de la solicitud.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc11"></a>11. Usuarios en el EEE y el Reino Unido
            </b>
          </p>
          <p>
            Tal como se establece en más detalle a continuación, solo tratamos o
            transferimos su información personal cuando podemos contar con los
            fundamentos legales y las medidas de seguridad correspondientes para
            ello. También tiene derechos adicionales con respecto a su
            información personal si se encuentra en el EEE o en el Reino Unido.
          </p>
          <p>
            <b>Bases legales para tratar su información personal</b>
          </p>
          <p>
            Solo tratamos su información personal cuando podemos contar con los
            fundamentos legales para ello. Tratamos su información personal para
            los fines que se establecen a continuación.
          </p>
          <p>Prestación de los servicios</p>
          <p>
            Tratamos su información personal para prestar nuestros servicios,
            para proporcionar o respaldar nuestros productos, o para cualquier
            otra función que solicite o habilite. Esto incluye, por ejemplo, el
            uso de su información personal para:
          </p>
          <ul>
            <li>administrar su cuenta de Activision;</li>
            <li>
              proporcionar concursos o promociones en los que se haya inscrito;
            </li>
            <li>brindar soporte para las compras que realice;</li>
            <li>brindar soporte para la funcionalidad de los juegos;</li>
            <li>proporcionar un servicio de atención al cliente integral; o</li>
            <li>
              proporcionar una experiencia de juego justa mediante el uso de
              tecnologías antifraude, como las prohibiciones o los bloqueos de
              cuentas.
            </li>
          </ul>
          <p>Consentimiento</p>
          <p>
            Tratamos su información personal en función de su consentimiento.
            Esto incluye, por ejemplo, proporcionar:
          </p>
          <ul>
            <li>
              boletines informativos, correos electrónicos directos y encuestas
              sobre nuestras Propiedades o los productos y servicios que puedan
              interesarle;
            </li>
            <li>anuncios focalizados en nuestros juegos móviles; y</li>
            <li>otras funciones de marketing.</li>
          </ul>
          <p>Interés legítimo</p>
          <p>
            Tratamos su información personal cuando tenemos un interés legítimo
            en hacerlo. Esto incluye, por ejemplo, el tratamiento:
          </p>
          <ul>
            <li>
              para proporcionarle el servicio de atención al cliente o el
              soporte técnico solicitado;
            </li>
            <li>
              para depurar y mejorar nuestras propiedades actuales y futuras;
            </li>
            <li>
              para proporcionarle contenido exclusivo, personalizar su
              experiencia en línea con nosotros y contactarlo de acuerdo con las
              preferencias de marketing correspondientes.
            </li>
            <li>
              para permitir que nuestros socios externos y licenciatarios creen
              aplicaciones y sitios web que beneficien a nuestra comunidad de
              jugadores (por ejemplo, torneos, tablas de clasificación y
              herramientas de estadísticas de juego); y
            </li>
            <li>
              para establecer, ejercer o defender reclamos legales o para
              cumplir con tribunales que actúen según la capacidad legal
              correspondiente.
            </li>
          </ul>
          <p>Obligación legal</p>
          <p>
            Trataremos su información personal en el caso de tener que cumplir
            con una obligación legal a la que estemos sujetos.
          </p>
          <p>
            <b>Sus derechos a su información personal</b>Usted tiene los
            siguientes derechos, además del derecho de visualizar, corregir,
            actualizar o solicitar la eliminación de su información personal,
            tal como se detalla en la sección anterior&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc8">
              <b>Acceso a la información</b>
            </a>
            . Para acceder a su información personal o eliminarla, también puede
            enviar una solicitud&nbsp;
            <a href="https://support.activision.com/privacy">aquí</a>.
          </p>
          <p>
            Puede oponerse al tratamiento de su información personal en función
            de un interés legítimo por motivos relacionados con su situación
            particular. Usted puede, en particular, controlar la medida en que
            le ofrecemos nuestros productos y servicios y tiene derecho a
            solicitar que dejemos de enviarle mensajes de marketing en cualquier
            momento. Puede utilizar los métodos descritos en la sección anterior
            <b>&nbsp;</b>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc8">
              <b>Acceso a la información</b>
            </a>
            <b>.</b>
          </p>
          <p>
            En determinadas circunstancias, puede solicitar que transfiramos
            información personal que usted nos proporcionó. Puede enviarnos su
            solicitud&nbsp;
            <a href="https://support.activision.com/privacy">aquí</a>.
          </p>
          <p>
            Cuando dependamos de su consentimiento para tratar su información
            personal, tendrá derecho a retirar en cualquier momento el
            consentimiento a seguir usando su información personal. Puede
            utilizar los métodos descritos en la sección anterior<b>&nbsp;</b>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc8">
              <b>Acceso a la información</b>
            </a>
            <b> </b>para actualizar sus preferencias de marketing.
          </p>
          <p>
            Para cada uno de los derechos descritos anteriormente, también puede
            enviarnos su solicitud usando la información de contacto en la
            sección<b>&nbsp;</b>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc9">
              <b>Contacto</b>
            </a>
            <b> </b>anterior<b>.</b>
          </p>
          <p>
            Esperamos poder satisfacer las consultas que pueda tener sobre la
            forma en que tratamos su información personal. Sin embargo, si tiene
            inquietudes sin resolver, también tiene derecho a reclamar ante las
            autoridades de protección de datos. Puede presentar la queja en su
            estado miembro de residencia, lugar de trabajo o en donde haya
            ocurrido una presunta infracción de las leyes de protección de
            datos.
          </p>
          <p>
            <b>Transferencias internacionales</b>Su información personal será
            transferida para su tratamiento en los Estados&nbsp;Unidos, donde
            operan muchas de nuestras bases de datos centrales, o en otros
            países donde existan instalaciones o se desarrollen operaciones
            comerciales de las empresas o los proveedores del grupo Activision
            Blizzard. Utilizamos cláusulas contractuales aprobadas por la
            Comisión Europea u otras garantías apropiadas para proteger su
            información personal. Por cualquier pregunta que tenga, comuníquese
            con nosotros usando la información de contacto en la sección
            <b>&nbsp;</b>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc9">
              <b>Contacto</b>
            </a>
            <b>&nbsp;</b>que figura más arriba.
          </p>
          <p>
            <b>Representantes de la UE y el Reino&nbsp;Unido</b>Para los
            visitantes del EEE, Activision ha designado a
            Activision&nbsp;Blizzard&nbsp;Ireland&nbsp;Ltd como representante en
            la Unión&nbsp;Europea y, para los visitantes del Reino&nbsp;Unido,
            Activision ha designado como representante a
            Activision&nbsp;Blizzard&nbsp;UK&nbsp;Ltd. Puede comunicarse con el
            representante de la UE o del Reino&nbsp;Unido a través de la
            información de contacto en la sección<b>&nbsp;</b>
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc9">
              <b>Contacto</b>
            </a>
            <b>&nbsp;</b>que figura más arriba.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc12"></a>12. Divulgación para usuarios fuera de los
              EE.&nbsp;UU., el EEE
            </b>{" "}
            <b>y el Reino&nbsp;Unido</b>
          </p>
          <p>
            Además, si visita nuestros sitios web u otros productos y servicios
            en línea fuera de los EE.&nbsp;UU., la información personal que
            proporcione se recopilará, tratará y almacenará directamente en
            servidores ubicados en los Estados Unidos (o se transferirá a ellos)
            o ubicados en otros países en donde existan instalaciones o se
            desarrollen operaciones comerciales de empresas, socios o
            proveedores del grupo Activision Blizzard. Es posible que los
            tribunales, las autoridades policiales y las autoridades de
            seguridad nacional de esas jurisdicciones puedan requerir el acceso
            a su información personal.
          </p>
          <p>
            Sin importar dónde se encuentre la información, Activision tomará
            medidas comercialmente razonables para proteger sus derechos de
            privacidad de acuerdo con esta Política de privacidad. Si no acepta
            la recopilación, el tratamiento, el almacenamiento y la
            transferencia de su información, no proporcione su información
            cuando se solicite y deje de utilizar nuestros sitios web y otros
            productos y servicios en línea.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              <a id="toc13"></a>13. Divulgación para usuarios en Japón
            </b>
          </p>
          <p>
            Operador comercial que maneja información personal: Activision
            Publishing, Inc. (dirección: 2701 Olympic Boulevard Building B,
            Santa Monica, CA 90404, visite nuestro&nbsp;
            <a href="https://www.activision.com/mx/es/company/aboutus">
              sitio web
            </a>
            &nbsp;para conocer el nombre del representante).
          </p>
          <p>
            Con respecto a la sección anterior&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc3">
              <b>Qué información recopilamos y cómo la utilizamos</b>
            </a>
            , para mayor claridad, Activision podría analizar la información
            personal sobre sus actividades y transacciones, etc. y utilizar esa
            información para fines de marketing, publicidad o la elaboración de
            su perfil.
          </p>
          <p>
            Con respecto a la sección anterior&nbsp;
            <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc6">
              <b>Divulgación de información</b>
            </a>
            ,<b>&nbsp;</b>para mayor claridad, Activision podría compartir su
            información personal de la siguiente manera:
          </p>
          <p>(i) Información personal que se compartirá</p>
          <ul>
            <li>
              Información personal descrita en la sección anterior&nbsp;
              <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc3">
                <b>Qué información recopilamos y cómo la utilizamos</b>
              </a>
              <b>.</b>
            </li>
          </ul>
          <p>
            (ii) Destinatarios con quienes se comparte su información personal
            (“Usuarios conjuntos”)
          </p>
          <ul>
            <li>
              Afiliados nacionales y extranjeros de Activision Publishing, Inc.,
              disponibles{" "}
              <a href="https://www.activision.com/mx/es/legal/entities">aquí</a>
              .
            </li>
          </ul>
          <p>(iii) Propósitos de uso por parte de los Usuarios conjuntos</p>
          <ul>
            <li>
              Propósitos de uso descritos en la sección&nbsp;
              <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc3">
                <b>Qué información recopilamos y cómo la utilizamos</b>
              </a>
              &nbsp;y en la sección anterior&nbsp;
              <a href="https://www.activision.com/mx/es/legal/privacy-policy#toc6">
                <b>Información compartida</b>
              </a>
              .
            </li>
          </ul>
          <p>
            (iv) Nombre y dirección, así como el nombre del representante de la
            entidad responsable de la gestión de la información personal que se
            compartirá
          </p>
          <ul>
            <li>
              Activision Publishing, Inc. (dirección: 2701 Olympic Boulevard
              Building B, Santa Monica, CA 90404, visite nuestro&nbsp;
              <a href="https://www.activision.com/mx/es/company/aboutus">
                sitio web
              </a>
              &nbsp;para conocer el nombre del representante).
            </li>
          </ul>
          <p>
            Activision implementa ciertas medidas necesarias y apropiadas para
            la prevención de fugas, pérdidas o daños de la información personal
            y para gestionar la seguridad de su información personal.&nbsp; Por
            cualquier pregunta acerca de las medidas de gestión de seguridad que
            implementamos, no dude en enviarnos un correo electrónico a&nbsp;
            <a href="mailto:dpo@activision.com">dpo@activision.com</a>&nbsp;o
            una carta a Activision Publishing, Inc., 2701 Olympic Boulevard
            Building B, Santa Monica, CA 90404, ATTN: Privacy Team/Privacy
            Policy.
          </p>
          <p> ©2026 Activision Publishing, INC. ACTIVISION, CALL OF DUTY, y la letra estilizada M son marcas registradas de Activision Publishing, INC. Las demás marcas comerciales y nombres comerciales son propiedad de sus respectivos dueños. </p>
  
        </div>
    </div>

      <>
        <div
          onClick={() => navigate("/codmFrontend/")}
          style={{
            maxHeight: "70px",
            display: "flex",
            marginTop: "40px",
            justifyContent: "center",
          }}
          className="buttonLayoutInstructions"
        >
          <div>
            <img loading="lazy" src={buttonlayout} style={{ height: "64px" }} alt="Cerrar" />

            <p
              className="guild-font"
              style={{
                fontSize: "12px",
                color: "#EDCC00",
                position: "relative",
                top: "-43px",
                right: "-33px",
              }}
            >
              REGRESAR
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default PrivacyPage;
