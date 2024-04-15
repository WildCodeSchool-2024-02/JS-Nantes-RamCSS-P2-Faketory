import "../styles/fake-school.css";

function FakeSchool() {
  const content = [
    {
      title: <h2>titre1</h2>,
      content: (
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis
          molestiae quaerat sit voluptates officia. Voluptate eos natus
          voluptatum repellat qui corporis explicabo sapiente soluta veniam est,
          nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident, aliquid facere! Magnam consectetur aspernatur error
          laudantium vero maxime maiores fugiat, reiciendis iusto itaque ad eius
          sequi ducimus autem quo qui."
        </p>
      ),
    },
    {
      title: <h2>titre2</h2>,
      content: (
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis
          molestiae quaerat sit voluptates officia. Voluptate eos natus
          voluptatum repellat qui corporis explicabo sapiente soluta veniam est,
          nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident, aliquid facere! Magnam consectetur aspernatur error
          laudantium vero maxime maiores fugiat, reiciendis iusto itaque ad eius
          sequi ducimus autem quo qui."
        </p>
      ),
    },
    {
      title: <h2>titre3</h2>,
      content: (
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis
          molestiae quaerat sit voluptates officia. Voluptate eos natus
          voluptatum repellat qui corporis explicabo sapiente soluta veniam est,
          nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident, aliquid facere! Magnam consectetur aspernatur error
          laudantium vero maxime maiores fugiat, reiciendis iusto itaque ad eius
          sequi ducimus autem quo qui."
        </p>
      ),
    },
    {
      title: <h2>titre4</h2>,
      content: (
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis
          molestiae quaerat sit voluptates officia. Voluptate eos natus
          voluptatum repellat qui corporis explicabo sapiente soluta veniam est,
          nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident, aliquid facere! Magnam consectetur aspernatur error
          laudantium vero maxime maiores fugiat, reiciendis iusto itaque ad eius
          sequi ducimus autem quo qui."
        </p>
      ),
    },
    {
      title: <h2>titre5</h2>,
      content: (
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis
          molestiae quaerat sit voluptates officia. Voluptate eos natus
          voluptatum repellat qui corporis explicabo sapiente soluta veniam est,
          nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident, aliquid facere! Magnam consectetur aspernatur error
          laudantium vero maxime maiores fugiat, reiciendis iusto itaque ad eius
          sequi ducimus autem quo qui."
        </p>
      ),
    },
    {
      title: <h2>titre6</h2>,
      content: (
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis
          molestiae quaerat sit voluptates officia. Voluptate eos natus
          voluptatum repellat qui corporis explicabo sapiente soluta veniam est,
          nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident, aliquid facere! Magnam consectetur aspernatur error
          laudantium vero maxime maiores fugiat, reiciendis iusto itaque ad eius
          sequi ducimus autem quo qui."
        </p>
      ),
    },
    {
      title: <h2>titre7</h2>,
      content: (
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo quis
          molestiae quaerat sit voluptates officia. Voluptate eos natus
          voluptatum repellat qui corporis explicabo sapiente soluta veniam est,
          nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident, aliquid facere! Magnam consectetur aspernatur error
          laudantium vero maxime maiorefugiat, reiciendis iusto itaque ad eius
          sequi ducimus autem quo qui."
        </p>
      ),
    },
    {
      title: <h2>titre8</h2>,
      content: (
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo quis
          molestiae quaerat sit voluptates officia. Voluptate eos natus
          voluptatum repellat qui corporis explicabo sapiente soluta veniam est,
          nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident, aliquid facere! Magnam consectetur aspernatur error
          laudantium vero maxime maiorefugiat, reiciendis iusto itaque ad eius
          sequi ducimus autem quo qui."
        </p>
      ),
    },
  ];

  const contentone = content[0].content;
  const contenttwo = content[1].content;
  const contenttree = content[2].content;
  const contentfor = content[3].content;
  const contentfive = content[4].content;
  const contentsix = content[5].content;
  const contentseven = content[6].content;
  const contenteight = content[7].content;

  return (
      <div className="contener">
        <div className="one">{contentone}</div>
        <h1 className="title">FAKESCHOOL</h1>
        <div className="two">{contenttwo}</div>
        <div className="tree">
          <img src="{contentimagetree}" alt="" />
          {contenttree}
        </div>
        <div className="for">
          <img src="images/photo.jpg" alt="" />
          {contentfor}
        </div>
        <div className="five">
          <img src="images/photo.jpg" alt="" />
          {contentfive}
        </div>
        <div className="six">
          <img src="images/photo.jpg" alt="" />
          {contentsix}
        </div>
        <div className="seven">
          <img src="images/photo.jpg" alt="" />
          {contentseven}
        </div>
        <div className="eight">{contenteight}</div>
      </div>
  );
}
export default FakeSchool;
