import { Tooltip } from 'bootstrap'

export default {
    beforeMount(el, binding) {
      // Inicializa o tooltip
      const tooltip = new Tooltip(el, binding.value);
  
      // Armazena a instância do tooltip no elemento para que possamos destruí-lo mais tarde
      el._tooltip = tooltip;
    },
    unmounted(el) {
      // Destrói o tooltip quando o elemento é desmontado
      if (el._tooltip) {
        el._tooltip.dispose();
      }
    },
    updated(el, binding) {
      // Atualiza o título do Tooltip quando o valor mudar
      const instance = Tooltip.getInstance(el);

      if(instance) {
        instance.setContent({ '.tooltip-inner': binding.value.title });
      }
    },
};