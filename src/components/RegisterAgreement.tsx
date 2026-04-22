

type Props = {
    setAgree: (val: boolean)=>void
}

export const RegisterAgreement = ({setAgree}: Props) => {
  return (
    <>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ducimus molestiae sit nisi odio vel libero aliquid! Atque maxime distinctio velit illum? Architecto accusamus quia quos maiores fugiat, quod placeat!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, laudantium! Laudantium, fugiat. Incidunt, labore placeat sit praesentium debitis porro officiis dolores vitae dicta soluta alias cumque, eum atque at eos!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci placeat minus quasi nam numquam, quo vel quisquam provident cum molestias, nulla quidem non quos tempora accusamus corporis pariatur asperiores aliquid!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at possimus voluptas, obcaecati nam molestiae ad quod, nihil, ipsa ab ratione alias ex dolore! Accusantium assumenda architecto hic perferendis reiciendis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, maxime labore ratione nisi ad quaerat voluptatum nostrum magni facere. Deserunt voluptas nam beatae veritatis omnis? Tenetur quaerat ut fugiat. Quam.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo sed, iste soluta impedit perferendis accusamus quo est. Tempora, velit recusandae placeat, et nulla consectetur officia fugiat animi ut deserunt provident!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, officia molestias? Beatae dolorum quos illo quae et impedit unde, in expedita ratione deleniti neque nihil similique totam consequatur esse laborum.
    </p>
    <button className="btn btn-primary" onClick={()=> setAgree(true)}>Estoy deacuerdo</button>
    </>
  )
}