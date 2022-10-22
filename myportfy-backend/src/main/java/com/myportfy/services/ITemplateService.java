package com.myportfy.services;

import com.myportfy.domain.Template;
import com.myportfy.dto.template.NavbarDto;

public interface ITemplateService extends IGenericService<Template>{
    void saveNavbar(NavbarDto navbar);
}
