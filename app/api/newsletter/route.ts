import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    // Configuración de Mailchimp con tus credenciales
    const MAILCHIMP_API_KEY = "dc450c05311efb7050b1e2b2bb95a0c1-us7"
    const MAILCHIMP_LIST_ID = "b54ffd61ff"
    const MAILCHIMP_SERVER_PREFIX = "us7" // Extraído de tu API key

    // Llamada a la API de Mailchimp
    const mailchimpResponse = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          tags: ["calculord-blog"], // Etiqueta para identificar suscriptores del blog
          merge_fields: {
            SOURCE: "Blog Calculord",
            SIGNUP_DATE: new Date().toISOString().split("T")[0],
          },
        }),
      },
    )

    const mailchimpData = await mailchimpResponse.json()

    if (mailchimpResponse.ok) {
      console.log(`Nueva suscripción exitosa: ${email}`)
      return NextResponse.json(
        {
          message: "Suscripción exitosa",
          subscriber_id: mailchimpData.id,
        },
        { status: 200 },
      )
    } else {
      // Manejar errores específicos de Mailchimp
      if (mailchimpData.title === "Member Exists") {
        return NextResponse.json(
          {
            error: "Este email ya está suscrito",
          },
          { status: 409 },
        )
      }

      console.error("Error de Mailchimp:", mailchimpData)
      return NextResponse.json(
        {
          error: "Error al procesar la suscripción",
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("Error en suscripción:", error)
    return NextResponse.json(
      {
        error: "Error interno del servidor",
      },
      { status: 500 },
    )
  }
}
