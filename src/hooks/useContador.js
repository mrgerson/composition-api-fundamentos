import { ref } from 'vue';
export function useContador() {
    const contador = ref(0);

    const aumentar = () => {
        contador.value++
    }

    const disminuir = () => {
        contador.value--
    }

    return { contador, aumentar, disminuir }
}

//los hooks se utilizan para reutilizar la lògica en los componentes y se pueden importar donde se necesite!!