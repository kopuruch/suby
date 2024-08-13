import { ModalConfig } from "../../interfaces/modal";

export interface IModalProps<Config extends ModalConfig> {
  config: Config;
}
