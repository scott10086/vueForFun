<template>
  <div class="hello">
    <Panel header="CRUD 4SD">
      <Menubar :model="items"/>
      <br>
      <DataTable :value="personas" :paginator="true" :rows="10">
        <Column field="nombre" header="Nombre"></Column>
        <Column field="apellido" header="Apellido"></Column>
        <Column field="direccion" header="Dirección"></Column>
        <Column field="telefono" header="Teléfono"></Column>
      </DataTable>
    </Panel>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      personas: null,
      persona: {
        nombre: null,
        apellido: null,
        direccion: null,
        telefono: null
      },
      items: [
        {
          label: "Hello2",
          icon: "pi pi-fw pi-plus",
          to: "/hello2"
        },
        {
          label: "Editar",
          icon: "pi pi-fw pi-pencil"
        },
        {
          label: "Eliminar",
          icon: "pi pi-fw pi-trash"
        },
        {
          label: "Refrescar",
          icon: "pi pi-fw pi-refresh"
        }
      ],
      displayModal: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
