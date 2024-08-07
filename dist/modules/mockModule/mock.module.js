"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./services/user.service");
const user_controller_1 = require("./controller/user.controller");
const common_service_1 = require("./services/common.service");
const common_controller_1 = require("./controller/common.controller");
const video_service_1 = require("./services/video.service");
const video_controller_1 = require("./controller/video.controller");
let MockModule = class MockModule {
};
exports.MockModule = MockModule;
exports.MockModule = MockModule = __decorate([
    (0, common_1.Module)({
        providers: [user_service_1.UserService, common_service_1.CommonService, video_service_1.VideoService],
        controllers: [user_controller_1.UserController, common_controller_1.CommonController, video_controller_1.VideoController],
    })
], MockModule);
//# sourceMappingURL=mock.module.js.map