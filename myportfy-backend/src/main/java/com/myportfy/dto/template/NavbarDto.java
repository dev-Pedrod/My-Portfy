package com.myportfy.dto.template;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class NavbarDto{
    @Length(max = 16,message = "O tamanho máximo é de 16 caracteres.")
    private String background;
    private Boolean hasBackground;
    private Boolean shadow;
    private String navJustifyContent;
    private Boolean border;
    @Length(max = 16,message = "O tamanho máximo é de 16 caracteres.")
    private String navTextColor;
    @Length(max = 16,message = "O tamanho máximo é de 16 caracteres.")
    private String linkBorderColor;
    private Boolean linkBold;
    private Boolean linkItalic;
    private String linkFont;
    private Integer linkSize;
    @Column(columnDefinition = "TEXT") //Base64
    private String logoImg;
    @Length(max = 16,message = "O tamanho máximo é de 16 caracteres.")
    private String logoText;
    private String logoFont;
    private Boolean logoBold;
    private Boolean logoItalic;
    @Length(max = 16,message = "O tamanho máximo é de 16 caracteres.")
    private String logoColor;
    private Integer logoSize;
    @ElementCollection
    private List<String> sections = new ArrayList<>();
}
