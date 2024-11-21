import {ActionFunctionArgs, LoaderFunctionArgs, MetaFunction, redirect} from "@remix-run/node";
import {Form, useLoaderData} from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "Lépj be ⚡️ Algoritmusok egyszerűen, könnyen" },
        { name: "description", content: "Welcome to Algorithms!" },
    ];
};

const Route = () => {
    return (
      <main id="root">
          <h1>Login</h1>

          <Form method="post">
              <input type="text" name="email" required className="bg-stone-900 text-white"/>
              <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  className="bg-stone-900 text-white"
              />
              <button>Sign In</button>
          </Form>
      </main>
    );
}

export const action = async ({ request }: ActionFunctionArgs) => {
    let form = await request.clone().formData();

    console.log(form.get("email"))

    return form;
}

export default Route;