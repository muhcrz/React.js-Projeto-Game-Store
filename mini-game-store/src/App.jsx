import { useState } from "react";
import "./App.css";

// ==========================================
// IMAGENS
// ==========================================

import logo from "./assets/logo.png";
import pcRyzen5 from "./assets/pc-5.jpg";
import pcRyzen7 from "./assets/pc-7.jpg";
import ps5 from "./assets/ps5.jpg";
import xbox from "./assets/xbox.jpg";
import switchConsole from "./assets/switch.jpg";
import notebook from "./assets/notebook.jpg";
import monitor from "./assets/monitor.jpg";
import headset from "./assets/headset.jpg";
import teclado from "./assets/teclado.jpg";


// ==========================================
// PRODUTOS
// ==========================================

const produtos = [
  {
    id: 1,
    nome: "PC Gamer Poseidon Ryzen 5",
    preco: 3499.90,
    categoria: "PC Gamer",
    imagem: pcRyzen5
  },
  {
    id: 2,
    nome: "PC Gamer Poseidon Ryzen 7",
    preco: 5299.90,
    categoria: "PC Gamer",
    imagem: pcRyzen7
  },
  {
    id: 3,
    nome: "PlayStation 5 Slim",
    preco: 3999.90,
    categoria: "Videogame",
    imagem: ps5
  },
  {
    id: 4,
    nome: "Xbox Series X",
    preco: 4299.90,
    categoria: "Videogame",
    imagem: xbox
  },
  {
    id: 5,
    nome: "Nintendo Switch OLED",
    preco: 2299.90,
    categoria: "Videogame",
    imagem: switchConsole
  },
  {
    id: 6,
    nome: "Notebook Gamer Poseidon",
    preco: 4799.90,
    categoria: "Notebook",
    imagem: notebook
  },
  {
    id: 7,
    nome: 'Monitor Gamer 24" 180Hz',
    preco: 899.90,
    categoria: "Monitor",
    imagem: monitor
  },
  {
    id: 8,
    nome: "Headset Gamer RGB",
    preco: 249.90,
    categoria: "Acessório",
    imagem: headset
  },
  {
    id: 9,
    nome: "Teclado Mecânico RGB",
    preco: 299.90,
    categoria: "Acessório",
    imagem: teclado
  }
];


// ==========================================
// CARD DO PRODUTO
// ==========================================

function ProductCard({ produto, adicionarAoCarrinho }) {
  return (
    <div className="game-card">

      <div className="game-image">
        <img
          src={produto.imagem}
          alt={produto.nome}
        />
      </div>

      <div className="game-info">

        <span className="category">
          {produto.categoria}
        </span>

        <h3>
          {produto.nome}
        </h3>

        <div className="game-bottom">

          <strong>
            R$ {produto.preco.toFixed(2).replace(".", ",")}
          </strong>

          <button
            onClick={() => adicionarAoCarrinho(produto)}
          >
            + Carrinho
          </button>

        </div>

      </div>

    </div>
  );
}


// ==========================================
// CARRINHO
// ==========================================

function Cart({
  carrinho,
  removerDoCarrinho,
  alterarQuantidade
}) {

  const total = carrinho.reduce(
    (soma, item) =>
      soma + item.preco * item.quantidade,
    0
  );

  return (
    <aside className="cart">

      <h2>🛒 Carrinho</h2>

      {carrinho.length === 0 ? (

        <div className="empty-cart">

          <p>
            Seu carrinho está vazio.
          </p>

          <span>
            Adicione um produto para começar!
          </span>

        </div>

      ) : (

        <>

          <div className="cart-items">

            {carrinho.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <div className="cart-game-icon">

                  <img
                    src={item.imagem}
                    alt={item.nome}
                  />

                </div>


                <div className="cart-game-info">

                  <h4>
                    {item.nome}
                  </h4>

                  <p>
                    R$ {item.preco
                      .toFixed(2)
                      .replace(".", ",")}
                  </p>


                  <div className="quantity">

                    <button
                      onClick={() =>
                        alterarQuantidade(
                          item.id,
                          -1
                        )
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantidade}
                    </span>

                    <button
                      onClick={() =>
                        alterarQuantidade(
                          item.id,
                          1
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                </div>


                <button
                  className="remove"
                  onClick={() =>
                    removerDoCarrinho(item.id)
                  }
                >
                  🗑️
                </button>

              </div>

            ))}

          </div>


          <div className="cart-total">

            <span>
              Total
            </span>

            <strong>
              R$ {total
                .toFixed(2)
                .replace(".", ",")}
            </strong>

          </div>


          <button
            className="checkout"
            onClick={() =>
              alert("Compra realizada! 🎮")
            }
          >
            Finalizar compra
          </button>

        </>

      )}

    </aside>
  );
}


// ==========================================
// APP PRINCIPAL
// ==========================================

function App() {

  const [carrinho, setCarrinho] = useState([]);

  const [pesquisa, setPesquisa] = useState("");


  // ========================================
  // ADICIONAR AO CARRINHO
  // ========================================

  function adicionarAoCarrinho(produto) {

    const produtoExiste = carrinho.find(
      (item) => item.id === produto.id
    );

    if (produtoExiste) {

      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? {
                ...item,
                quantidade:
                  item.quantidade + 1
              }
            : item
        )
      );

    } else {

      setCarrinho([
        ...carrinho,
        {
          ...produto,
          quantidade: 1
        }
      ]);

    }
  }


  // ========================================
  // REMOVER DO CARRINHO
  // ========================================

  function removerDoCarrinho(id) {

    setCarrinho(
      carrinho.filter(
        (item) => item.id !== id
      )
    );

  }


  // ========================================
  // ALTERAR QUANTIDADE
  // ========================================

  function alterarQuantidade(id, valor) {

    setCarrinho(

      carrinho
        .map((item) => {

          if (item.id === id) {

            return {
              ...item,
              quantidade:
                item.quantidade + valor
            };

          }

          return item;

        })

        .filter(
          (item) => item.quantidade > 0
        )

    );

  }


  // ========================================
  // PESQUISA
  // ========================================

  const produtosFiltrados =
    produtos.filter((produto) =>
      produto.nome
        .toLowerCase()
        .includes(
          pesquisa.toLowerCase()
        )
    );


  // ========================================
  // INTERFACE
  // ========================================

  return (

    <div className="app">

      <header>

        <div className="logo">

          <img
            src={logo}
            alt="Poseidon"
          />

        </div>


        <div className="user">

          <span>
            Usuário
          </span>

        </div>

      </header>


      <main>

        <section className="store">

          <div className="title">

            <div>

              <h1>
                Encontre sua próxima máquina!
              </h1>

              <p>
                Os melhores PCs, videogames e
                acessórios em um só lugar
              </p>

            </div>


            <input
              type="text"
              placeholder="🔎 Pesquisar produto..."
              value={pesquisa}
              onChange={(e) =>
                setPesquisa(e.target.value)
              }
            />

          </div>


          <div className="games">

            {produtosFiltrados.length > 0 ? (

              produtosFiltrados.map(
                (produto) => (

                  <ProductCard
                    key={produto.id}
                    produto={produto}
                    adicionarAoCarrinho={
                      adicionarAoCarrinho
                    }
                  />

                )
              )

            ) : (

              <p className="not-found">
                Nenhum produto encontrado.
              </p>

            )}

          </div>

        </section>


        <Cart
          carrinho={carrinho}
          removerDoCarrinho={
            removerDoCarrinho
          }
          alterarQuantidade={
            alterarQuantidade
          }
        />

      </main>

    </div>

  );
}


export default App;