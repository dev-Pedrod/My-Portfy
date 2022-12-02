package com.myportfy.services;

import com.myportfy.domain.Template;
import com.myportfy.dto.DtoDomain;
import com.myportfy.dto.template.NavbarDto;

public interface ITemplateService extends IGenericService<Template, DtoDomain>{
    void saveNavbar(NavbarDto navbar);
}
